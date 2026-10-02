import { Box, Stack } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import { fallbackStackIcon, itemIcons } from "../icons";

type StackToolChipProps = {
  delay?: number;
  item: string;
};

export function StackToolChip({ item, delay = 0 }: StackToolChipProps) {
  const ItemIcon = itemIcons[item] ?? fallbackStackIcon;
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <Stack
      component={motion.span}
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      direction="row"
      spacing={1}
      sx={{
        alignItems: "center",
        bgcolor: "background.default",
        border: 1,
        borderColor: "divider",
        borderRadius: 999,
        color: "text.secondary",
        fontSize: "0.8rem",
        fontWeight: 800,
        lineHeight: 1.2,
        minHeight: 38,
        px: 1.25,
        py: 1,
        transition:
          "transform 0.18s ease, border-color 0.18s ease, background 0.18s ease",
        "&:hover": {
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(0, 255, 194, 0.06)"
              : "rgba(91, 91, 214, 0.06)",
          borderColor: "primary.main",
          color: "text.primary",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          color: "primary.main",
          display: "inline-flex",
          fontSize: 18,
          "& svg": { fontSize: 18, height: "1em", width: "1em" },
        }}
      >
        <ItemIcon />
      </Box>
      <Box component="span">{item}</Box>
    </Stack>
  );
}
