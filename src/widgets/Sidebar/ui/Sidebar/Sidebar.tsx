import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';
import { Route } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}
export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                buttonSize={ButtonSize.XL}
                square
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.collapsedBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div>
                    <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.main} className={cls.item}>
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('Main page')}
                        </span>
                    </AppLink>
                </div>
                <div>
                    <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.about} className={cls.item}>
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('About page')}
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
}
