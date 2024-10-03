import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { Theme } from 'app/providers/ThemeProvider';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('Enter username')} className={cls.input} type="text" />
            <Input placeholder={t('Enter password')} className={cls.input} type="text" />
            <Button theme={ThemeButton.OUTLINE} className={cls.loginBtn}>
                {t('Log in')}
            </Button>
        </div>
    );
};
