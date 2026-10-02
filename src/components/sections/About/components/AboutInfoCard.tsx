import { Box, Stack, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import { aboutCardIcons } from "../icons";
import type { AboutCard } from "../types";

type AboutInfoCardProps = {
  card: AboutCard;
  index: number;
};

export function AboutInfoCard({ card, index }: AboutInfoCardProps) {
  const CardIcon = aboutCardIcons[index % aboutCardIcons.length];
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <Stack
      component={motion.div}
      spacing={{ xs: 1.25, lg: 1.5 }}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2.5,
        minHeight: "100%",
        p: { xs: 1.75, lg: 2 },
        transition: "border-color 0.2s ease, transform 0.2s ease",
        "&:hover": {
          borderColor: "primary.main",
          transform: "translateY(-4px)",
        },
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          "&:hover": { transform: "none" },
        },
        "@media (min-width: 900px) and (max-height: 820px)": {
          gap: 1.25,
          p: 1.5,
        },
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          color: "primary.main",
          display: "flex",
          height: { xs: 28, lg: 32 },
          "@media (min-width: 900px) and (max-height: 820px)": {
            height: 26,
          },
        }}
      >
        <CardIcon fontSize="small" />
      </Box>

      <Typography
        component="h3"
        sx={{
          fontSize: { xs: "0.9rem", lg: "0.95rem" },
          fontWeight: 800,
          lineHeight: 1.3,
          "@media (min-width: 900px) and (max-height: 820px)": {
            fontSize: "0.875rem",
          },
        }}
      >
        {card.title}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.825rem", lg: "0.875rem" },
          lineHeight: 1.55,
          "@media (min-width: 900px) and (max-height: 820px)": {
            fontSize: "0.8125rem",
            lineHeight: 1.5,
          },
        }}
      >
        {card.description}
      </Typography>
    </Stack>
  );
}
