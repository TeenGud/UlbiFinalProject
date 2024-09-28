import { classNames } from 'shared/lib/classNames/classNames';
import 'app/styles/index.scss';
import React, { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean,
    buttonSize?: ButtonSize
}
export const Button: React.FC<ButtonProps> = ({
    className, children, theme, square, buttonSize, ...otherProps
}: ButtonProps) => (
    // eslint-disable-next-line react/button-has-type
    <button
        // eslint-disable-next-line max-len
        className={classNames(cls.Button, { [cls.square]: square, [cls[theme]]: true }, [className, cls[buttonSize]])}
        {...otherProps}
    >
        {children}
    </button>
);
