import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}
export const Input = memo(({
    className, value, onChange, type, placeholder, autofocus, ...otherProps
}: InputProps) => {
    const [caretPosition, setCaretPosition] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus, ref]);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocuse = () => {
        setIsFocused(true);
    };
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input ref={ref} onSelect={onSelect} onFocus={onFocuse} onBlur={onBlur} className={cls.input} type={type} value={value} onChange={onChangeHandler} {...otherProps} />
                {isFocused && (
                    <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />
                )}
            </div>
        </div>
    );
});
