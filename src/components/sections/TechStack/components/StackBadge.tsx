import { Stack, Typography } from "@mui/material";

import { stackBadgeIcon as StackBadgeIcon } from "../icons";

export function StackBadge() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: "center",
        border: 1,
        borderColor: "divider",
        borderRadius: 999,
        color: "primary.main",
        justifySelf: { md: "end" },
        px: 1.5,
        py: 1,
        width: "fit-content",
      }}
    >
      <StackBadgeIcon fontSize="small" />
      <Typography
        component="span"
        sx={{
          color: "text.primary",
          fontSize: "0.8rem",
          fontWeight: 800,
          lineHeight: 1,
        }}
      >
        Build, ship, observe
      </Typography>
    </Stack>
  );
}
