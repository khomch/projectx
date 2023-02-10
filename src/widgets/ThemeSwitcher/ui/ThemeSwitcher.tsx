import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import IconThemeDark from 'shared/assets/icons/icon-theme-dark.svg';
import IconThemeLight from 'shared/assets/icons/icon-theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <IconThemeDark /> : <IconThemeLight /> }
        </Button>
    );
};
