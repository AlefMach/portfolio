import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useThemeMode } from "../../../hooks/useThemeMode";

export function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();
  const nextMode = mode === "dark" ? "light" : "dark";

  return (
    <Tooltip title={`Ativar tema ${nextMode === "dark" ? "escuro" : "claro"}`}>
      <IconButton
        aria-label={`Ativar tema ${nextMode === "dark" ? "escuro" : "claro"}`}
        onClick={toggleTheme}
        sx={{
          border: 1,
          borderColor: "divider",
          color: "text.primary",
          height: 40,
          width: 40,
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
