import {
  LOCALE_STORAGE_THEME_KEY,
  ThemeContext,
} from "app/providers/ThemeProviders/lib/ThemeContext"; // ФСД не идеален для всех случаев - не хочу размазывать провайдеры и контекс, его констатнты по всмеу проекту, поэтому тут экспорт из app оправдан
import { useContext } from "react";
import { Theme } from "shared/types/global";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
