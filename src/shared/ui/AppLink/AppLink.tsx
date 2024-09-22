import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}
export const AppLink: React.FC<AppLinkProps> = ({to, theme = AppLinkTheme.PRIMARY, className, children, ...otherProps}: AppLinkProps) => {
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    )
}