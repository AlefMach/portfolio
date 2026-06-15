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
      spacing={1.5}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        minHeight: "100%",
        p: 2,
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          color: "primary.main",
          display: "flex",
          height: 32,
        }}
      >
        <CardIcon fontSize="small" />
      </Box>

      <Typography
        component="h3"
        sx={{
          fontSize: "0.95rem",
          fontWeight: 800,
          lineHeight: 1.3,
        }}
      >
        {card.title}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "0.875rem",
          lineHeight: 1.6,
        }}
      >
        {card.description}
      </Typography>
    </Stack>
  );
}
