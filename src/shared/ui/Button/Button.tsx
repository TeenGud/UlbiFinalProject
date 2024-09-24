import { classNames } from 'shared/lib/classNames/classNames';
import 'app/styles/index.scss';
import * as cls from './Button.module.scss'
import React, { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
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