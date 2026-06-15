import { useContext } from "react";

import { ThemeContext } from "../contexts/themeContext";

export const useThemeMode = () => useContext(ThemeContext);
