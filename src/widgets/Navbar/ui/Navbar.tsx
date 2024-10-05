import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ThemeButton.OUTLINE} className={cls.links} type="button" onClick={onLogout}>
                    {t('Log out')}
                </Button>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} className={cls.links} type="button" onClick={onShowModal}>
                {t('Log in')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>

    );
}
