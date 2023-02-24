import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    DEFAULT = 'default',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.DEFAULT,
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            { title && <p className={cls.title}>{ title }</p> }
            { text && <p className={cls.text}>{ text }</p> }
        </div>
    );
};
