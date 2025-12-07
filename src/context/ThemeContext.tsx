import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeContext, type ThemeMode } from "./ThemeContext";

// Always use light theme
const THEME: ThemeMode = "light";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme] = useState<ThemeMode>(THEME);

  const setTheme = useCallback(() => {
    // No-op - always light theme
  }, []);

  const toggleTheme = useCallback(() => {
    // No-op - always light theme
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", "light");
    // Also remove any dark class if present
    root.classList.remove("dark");
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

