import { createTheme } from "@mui/material/styles";

import { breakpoints } from "../styles/breakpoints";
import { darkPalette, lightPalette } from "./palette";

export const getTheme = (mode: "light" | "dark") => {
  const palette = mode === "light" ? lightPalette : darkPalette;

  return createTheme({
    breakpoints: {
      values: breakpoints.values,
    },

    palette,

    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontWeight: 800,
      },
      h2: {
        fontWeight: 750,
      },
      button: {
        fontWeight: 700,
        textTransform: "none",
      },
    },

    shape: {
      borderRadius: 14,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "*": {
            boxSizing: "border-box",
          },
          html: {
            scrollBehavior: "smooth",
          },
          "html, body, #root": {
            minHeight: "100%",
          },
          body: {
            background:
              mode === "light"
                ? palette.background.paper
                : palette.background.paper,
            margin: 0,
            overflowX: "hidden",
          },
          "#root": {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          },
          a: {
            color: "inherit",
            textDecoration: "none",
          },
          img: {
            display: "block",
            maxWidth: "100%",
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingLeft: 24,
            paddingRight: 24,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          },
          contained: {
            background:
              mode === "dark"
                ? "linear-gradient(135deg, #00FFC2 0%, #2dd4bf 100%)"
                : "linear-gradient(135deg, #5B5BD6 0%, #7c6cf0 100%)",
            color: mode === "dark" ? "#082f49" : "#ffffff",
            boxShadow: "0 8px 20px rgba(91, 91, 214, 0.25)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 12px 28px rgba(91, 91, 214, 0.35)",
              background:
                mode === "dark"
                  ? "linear-gradient(135deg, #2dd4bf 0%, #00FFC2 100%)"
                  : "linear-gradient(135deg, #4c4cc4 0%, #5B5BD6 100%)",
            },
          },
          outlined: {
            borderColor: mode === "dark" ? "rgba(0, 255, 194, 0.4)" : "rgba(91, 91, 214, 0.4)",
            "&:hover": {
              transform: "translateY(-2px)",
              borderColor: mode === "dark" ? "#00FFC2" : "#5B5BD6",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border:
              mode === "dark"
                ? "1px solid rgba(148, 163, 184, 0.12)"
                : "1px solid rgba(15, 23, 42, 0.06)",
            boxShadow:
              mode === "dark"
                ? "0 10px 30px rgba(0,0,0,0.35)"
                : "0 10px 30px rgba(15, 23, 42, 0.06)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow:
                mode === "dark"
                  ? "0 16px 40px rgba(0,0,0,0.5)"
                  : "0 16px 40px rgba(15, 23, 42, 0.1)",
            },
          },
        },
      },
    },
  });
};
