import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

type TUseThemeResult = {
  toggleTheme: () => void;
  theme: Theme;
};

export function useTheme(): TUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    let newTheme: Theme;
    switch (theme) {
    case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
    case Theme.LIGHT:
        newTheme = Theme.BLUE;
        break;
    case Theme.BLUE:
        newTheme = Theme.DARK;
        break;
    default:
        newTheme = Theme.LIGHT;
    }

    const toggleTheme = () => {
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
