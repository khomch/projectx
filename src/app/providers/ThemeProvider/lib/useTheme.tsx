import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
import { useContext } from 'react';

type TUseThemeResult = {
  toggleTheme: () => void;
  theme: Theme;
};

export function useTheme(): TUseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);
  const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  const toggleTheme = () => {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {theme, toggleTheme}

}