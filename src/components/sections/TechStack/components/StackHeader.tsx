import { Box } from "@mui/material";

import { SectionHeading } from "../../SectionHeading";
import { StackBadge } from "./StackBadge";

type StackHeaderProps = {
  description: string;
  title: string;
};

export function StackHeader({ description, title }: StackHeaderProps) {
  return (
    <Box
      sx={{
        alignItems: { md: "end" },
        display: "grid",
        gap: 3,
        gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
      }}
    >
      <SectionHeading title={title} description={description} />

      <StackBadge />
    </Box>
  );
}
