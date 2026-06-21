import { Box, Stack, Typography } from "@mui/material";

import { aboutCardIcons } from "../icons";
import type { AboutCard } from "../types";

type AboutInfoCardProps = {
  card: AboutCard;
  index: number;
};

export function AboutInfoCard({ card, index }: AboutInfoCardProps) {
  const CardIcon = aboutCardIcons[index % aboutCardIcons.length];

  return (
    <Stack
      spacing={{ xs: 1.25, lg: 1.5 }}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        minHeight: "100%",
        p: { xs: 1.75, lg: 2 },
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
