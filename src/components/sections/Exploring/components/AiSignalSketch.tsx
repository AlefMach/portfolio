import { Box } from "@mui/material";

type DiagramNodeProps = {
  delay?: string;
  emphasis?: boolean;
  label: string;
};

function DiagramNode({
  delay = "0s",
  emphasis = false,
  label,
}: DiagramNodeProps) {
  return (
    <Box
      data-node="true"
      sx={{
        alignItems: "center",
        animationDelay: delay,
        bgcolor: emphasis ? "primary.main" : "background.default",
        border: 1,
        borderColor: emphasis ? "primary.main" : "divider",
        borderRadius: 2,
        color: emphasis ? "primary.contrastText" : "text.secondary",
        display: "flex",
        fontSize: "0.68rem",
        fontWeight: 900,
        height: 36,
        justifyContent: "center",
        letterSpacing: 0,
        minWidth: 58,
        px: 1,
        position: "relative",
        zIndex: 1,
      }}
    >
      {label}
    </Box>
  );
}

function FlowLine() {
  return (
    <Box
      data-flow="true"
      sx={{
        "@keyframes aiFlowLine": {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
        alignSelf: "center",
        background:
          "linear-gradient(90deg, transparent 0%, currentColor 35%, currentColor 65%, transparent 100%)",
        backgroundSize: "220% 100%",
        animation: "aiFlowLine 2.4s linear infinite",
        color: "primary.main",
        height: 2,
        mx: 0.25,
        position: "relative",
        width: "100%",
        "&::after": {
          borderRight: 2,
          borderTop: 2,
          borderColor: "primary.main",
          content: '""',
          height: 7,
          position: "absolute",
          right: 0,
          top: -3,
          transform: "rotate(45deg)",
          width: 7,
        },
      }}
    />
  );
}

const outputNodes = ["TAG", "SLACK", "MR"] as const;

export function AiSignalSketch() {
  return (
    <Box
      aria-hidden
      sx={{
        "@keyframes aiFlowLine": {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
        "@keyframes aiDecisionPulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 255, 194, 0)" },
          "50%": { boxShadow: "0 0 0 8px rgba(0, 255, 194, 0.14)" },
        },
        "@keyframes aiNodeFocus": {
          "0%, 100%": { borderColor: "divider", transform: "translateY(0)" },
          "50%": { borderColor: "primary.main", transform: "translateY(-2px)" },
        },
        display: "grid",
        gridTemplateColumns:
          "minmax(58px, 0.8fr) 28px minmax(58px, 0.9fr) 28px minmax(70px, 1fr)",
        gridTemplateRows: "repeat(3, 36px)",
        gap: 1,
        minHeight: 156,
        placeContent: "center",
        width: "100%",
        "& [data-node='true']": {
          animation: "aiNodeFocus 3.6s ease-in-out infinite",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "& [data-flow='true'], & [data-pulse='true'], & [data-node='true']": {
            animation: "none",
          },
        },
      }}
    >
      <Box sx={{ gridColumn: 1, gridRow: 2 }}>
        <DiagramNode label="CARD" />
      </Box>

      <Box sx={{ display: "flex", gridColumn: 2, gridRow: 2 }}>
        <FlowLine />
      </Box>

      <Box
        data-pulse="true"
        sx={{
          animation: "aiDecisionPulse 2.8s ease-in-out infinite",
          gridColumn: 3,
          gridRow: 2,
        }}
      >
        <DiagramNode emphasis label="LLM" />
      </Box>

      <Box sx={{ display: "flex", gridColumn: 4, gridRow: 2 }}>
        <FlowLine />
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 0.75,
          gridColumn: 5,
          gridRow: "1 / 4",
        }}
      >
        {outputNodes.map((node) => (
          <DiagramNode key={node} delay="0.45s" label={node} />
        ))}
      </Box>
    </Box>
  );
}
