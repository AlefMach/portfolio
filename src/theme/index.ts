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
      borderRadius: 10,
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
    },
  });
};
