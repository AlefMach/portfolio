import { Box, Typography } from "@mui/material";

type ExperienceHighlightsProps = {
  highlights: string[];
};

export function ExperienceHighlights({
  highlights,
}: ExperienceHighlightsProps) {
  return (
    <Box
      component="ul"
      sx={{
        display: "grid",
        gap: 1.1,
        listStyle: "none",
        m: 0,
        p: 0,
      }}
    >
      {highlights.map((highlight) => (
        <Typography
          key={highlight}
          component="li"
          sx={{
            borderLeft: 2,
            borderColor: "divider",
            color: "text.secondary",
            fontSize: "0.93rem",
            lineHeight: 1.7,
            pl: 1.35,
            position: "relative",
            "&::before": {
              bgcolor: "primary.main",
              borderRadius: "50%",
              content: '""',
              height: 5,
              left: -3.5,
              position: "absolute",
              top: "0.73em",
              width: 5,
            },
          }}
        >
          {highlight}
        </Typography>
      ))}
    </Box>
  );
}
