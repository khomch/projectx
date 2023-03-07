import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import IconTheme from 'shared/assets/icons/icon-theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

enum IconColors {
    DARK = '#58a6ff',
    LIGHT = '#0969da',
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <IconTheme fill={IconColors.DARK} /> : <IconTheme fill={IconColors.LIGHT} /> }
        </Button>
    );
});
