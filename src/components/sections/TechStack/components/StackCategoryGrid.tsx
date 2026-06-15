import { Box } from "@mui/material";

import type { StackCategory } from "../types";
import { StackCategoryCard } from "./StackCategoryCard";

type StackCategoryGridProps = {
  categories: StackCategory[];
  toolsLabel: string;
};

export function StackCategoryGrid({
  categories,
  toolsLabel,
}: StackCategoryGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: { xs: 2, md: 3 },
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          md: "repeat(3, minmax(0, 1fr))",
        },
      }}
    >
      {categories.map((category, index) => (
        <StackCategoryCard
          key={category.title}
          category={category}
          index={index}
          toolsLabel={toolsLabel}
        />
      ))}
    </Box>
  );
}
