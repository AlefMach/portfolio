import { Box } from "@mui/material";

type AboutFocusListProps = {
  items: readonly string[];
};

export function AboutFocusList({ items }: AboutFocusListProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {items.map((item) => (
        <Box
          key={item}
          component="span"
          sx={{
            border: 1,
            borderColor: "divider",
            borderRadius: 999,
            color: "text.secondary",
            fontSize: "0.75rem",
            fontWeight: 800,
            lineHeight: 1,
            px: 1.25,
            py: 0.75,
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
}
