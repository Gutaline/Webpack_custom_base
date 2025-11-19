import { useState, ReactNode } from "react";
import { LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext
      value={{
        theme,
        setTheme, // в 19 реакте  Упростили передачу value - можно передавать объект напрямую. До 19 использовали useMemo для объекта
      }}
    >
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;
