import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import i18n from 'shared/config/i18n/i18n';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from 'features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducer: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [username, password, dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducer} removeAfterUnmout>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Login form')} />
                {error && <Text text={i18n.t('Wrong login or password')} theme={TextTheme.ERROR} />}
                <Input autofocus placeholder={t('Enter username')} className={cls.input} type="text" onChange={onChangeUsername} value={username} />
                <Input placeholder={t('Enter password')} className={cls.input} type="text" onChange={onChangePassword} value={password} />
                <Button disabled={isLoading} onClick={onLoginClick} theme={ThemeButton.OUTLINE} className={cls.loginBtn}>
                    {t('Log in')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
