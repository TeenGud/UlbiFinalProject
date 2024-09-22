import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Button.module.scss'
import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}
export const Button: React.FC<ButtonProps> = ({className, children, theme, ...otherProps}: ButtonProps) => {
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    )
}