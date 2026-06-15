import { createContext } from "react";

export type ThemeMode = "light" | "dark";

export type ThemeContextType = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);
