import { Box, Stack } from "@mui/material";

import { fallbackStackIcon, itemIcons } from "../icons";

type StackToolChipProps = {
  item: string;
};

export function StackToolChip({ item }: StackToolChipProps) {
  const ItemIcon = itemIcons[item] ?? fallbackStackIcon;

  return (
    <Stack
      component="span"
      direction="row"
      spacing={1}
      sx={{
        alignItems: "center",
        bgcolor: "background.default",
        border: 1,
        borderColor: "divider",
        borderRadius: 1.5,
        color: "text.secondary",
        fontSize: "0.8rem",
        fontWeight: 800,
        lineHeight: 1.2,
        minHeight: 40,
        px: 1.25,
        py: 1,
      }}
    >
      <ItemIcon sx={{ color: "primary.main", fontSize: 18 }} />
      <Box component="span">{item}</Box>
    </Stack>
  );
}
