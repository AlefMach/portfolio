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
        gap: 2,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(3, minmax(0, 1fr))",
        },
      }}
    >
      {cards.map((card, index) => (
        <AboutInfoCard key={card.title} card={card} index={index} />
      ))}
    </Box>
  );
}
