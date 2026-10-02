import { Box } from "@mui/material";

import { fallbackStackIcon, itemIcons } from "../icons";

const marqueeItems = [
  "Elixir",
  "Kotlin",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "OpenTelemetry",
] as const;

export function TechMarquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <Box
      aria-hidden
      sx={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box
        sx={{
          animation: "techMarquee 28s linear infinite",
          display: "flex",
          gap: 1.5,
          width: "max-content",
          "@keyframes techMarquee": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
          "&:hover": { animationPlayState: "paused" },
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      >
        {doubled.map((item, index) => {
          const Icon = itemIcons[item] ?? fallbackStackIcon;
          return (
            <Box
              key={`${item}-${index}`}
              sx={{
                alignItems: "center",
                border: 1,
                borderColor: "divider",
                borderRadius: 999,
                color: "text.secondary",
                display: "inline-flex",
                fontSize: "0.8rem",
                fontWeight: 800,
                gap: 1,
                px: 1.75,
                py: 1,
                whiteSpace: "nowrap",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "primary.main",
                  display: "inline-flex",
                  fontSize: 18,
                  "& svg": { fontSize: 18, height: "1em", width: "1em" },
                }}
              >
                <Icon />
              </Box>
              {item}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
