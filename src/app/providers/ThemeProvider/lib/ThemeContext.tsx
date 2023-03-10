import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  BLUE = 'app_blue_theme',
}

export type TThemeContextProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<TThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
