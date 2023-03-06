import { classNames, TMods } from 'shared/lib/helpers/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        onChange,
        autoFocus,
        readonly,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const mods: TMods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Input, mods, [className])}>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readonly}
                disabled={readonly}
                {...otherProps}
            />
        </div>
    );
});
