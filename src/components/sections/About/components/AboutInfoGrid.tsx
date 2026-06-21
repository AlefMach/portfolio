import { Box } from "@mui/material";

import type { AboutCard } from "../types";
import { AboutInfoCard } from "./AboutInfoCard";

type AboutInfoGridProps = {
  cards: readonly AboutCard[];
};

export function AboutInfoGrid({ cards }: AboutInfoGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: { xs: 1.5, lg: 2 },
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(3, minmax(0, 1fr))",
        },
        "@media (min-width: 900px) and (max-height: 820px)": {
          gap: 1.5,
        },
      }}
    >
      {cards.map((card, index) => (
        <AboutInfoCard key={card.title} card={card} index={index} />
      ))}
    </Box>
  );
}
