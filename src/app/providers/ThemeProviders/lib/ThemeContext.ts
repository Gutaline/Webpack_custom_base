import { createContext } from "react";
import { Theme } from "shared/types/global";

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCALE_STORAGE_THEME_KEY = "theme";
