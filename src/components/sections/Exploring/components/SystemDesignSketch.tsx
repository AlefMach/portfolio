import { Box } from "@mui/material";

type SystemNodeProps = {
  label: string;
  tone?: "default" | "primary" | "secondary";
};

function SystemNode({ label, tone = "default" }: SystemNodeProps) {
  const isPrimary = tone === "primary";
  const isSecondary = tone === "secondary";

  return (
    <Box
      sx={{
        alignItems: "center",
        bgcolor: isPrimary
          ? "primary.main"
          : isSecondary
            ? "action.hover"
            : "background.default",
        border: 1,
        borderColor: isPrimary ? "primary.main" : "divider",
        borderRadius: label === "QUEUE" ? 999 : 2,
        color: isPrimary ? "primary.contrastText" : "text.secondary",
        display: "flex",
        fontSize: "0.66rem",
        fontWeight: 900,
        height: 34,
        justifyContent: "center",
        letterSpacing: 0,
        minWidth: label === "QUEUE" ? 68 : 50,
        px: 1,
        width: "100%",
      }}
    >
      {label}
    </Box>
  );
}

type ConnectorProps = {
  delay?: string;
  gridColumn: number;
  gridRow: number;
};

function HorizontalConnector({
  delay = "0s",
  gridColumn,
  gridRow,
}: ConnectorProps) {
  return (
    <Box
      data-flow="true"
      sx={{
        alignItems: "center",
        animationDelay: delay,
        alignSelf: "center",
        color: "primary.main",
        display: "flex",
        minWidth: 26,
        "&::before": {
          bgcolor: "currentColor",
          content: '""',
          height: 2,
          width: "100%",
        },
        "&::after": {
          borderRight: 2,
          borderTop: 2,
          borderColor: "currentColor",
          content: '""',
          height: 7,
          ml: -0.75,
          transform: "rotate(45deg)",
          width: 7,
        },
        gridColumn,
        gridRow,
      }}
    />
  );
}

function LeftConnector({ delay = "0s", gridColumn, gridRow }: ConnectorProps) {
  return (
    <Box
      data-flow="true"
      sx={{
        alignItems: "center",
        animationDelay: delay,
        alignSelf: "center",
        color: "secondary.main",
        display: "flex",
        minWidth: 26,
        "&::before": {
          borderBottom: 2,
          borderLeft: 2,
          borderColor: "currentColor",
          content: '""',
          height: 7,
          mr: -0.75,
          transform: "rotate(45deg)",
          width: 7,
        },
        "&::after": {
          bgcolor: "currentColor",
          content: '""',
          height: 2,
          width: "100%",
        },
        gridColumn,
        gridRow,
      }}
    />
  );
}

function VerticalConnector({
  delay = "0s",
  gridColumn,
  gridRow,
}: ConnectorProps) {
  return (
    <Box
      data-flow="true"
      sx={{
        alignItems: "center",
        animationDelay: delay,
        color: "secondary.main",
        display: "flex",
        flexDirection: "column",
        height: 32,
        justifySelf: "center",
        "&::before": {
          bgcolor: "currentColor",
          content: '""',
          flex: 1,
          width: 2,
        },
        "&::after": {
          borderBottom: 2,
          borderRight: 2,
          borderColor: "currentColor",
          content: '""',
          height: 7,
          mt: -0.75,
          transform: "rotate(45deg)",
          width: 7,
        },
        gridColumn,
        gridRow,
      }}
    />
  );
}

export function SystemDesignSketch() {
  return (
    <Box
      aria-hidden
      sx={{
        "@keyframes connectorPulse": {
          "0%, 100%": { opacity: 0.38 },
          "50%": { opacity: 1 },
        },
        "@keyframes systemNodeFocus": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
        display: "grid",
        gridTemplateColumns:
          "minmax(46px, 0.8fr) 28px minmax(58px, 0.9fr) 28px minmax(68px, 1fr) 28px minmax(48px, 0.8fr)",
        gridTemplateRows: "34px 28px 34px 28px 34px",
        minHeight: 172,
        placeContent: "center",
        columnGap: 0.25,
        rowGap: 0.25,
        width: "100%",
        "& [data-flow='true']": {
          animation: "connectorPulse 2.2s ease-in-out infinite",
        },
        "& [data-node='true']": {
          animation: "systemNodeFocus 4s ease-in-out infinite",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "& [data-flow='true'], & [data-node='true']": {
            animation: "none",
          },
        },
      }}
    >
      <Box
        data-node="true"
        sx={{ gridColumn: 1, gridRow: 1, justifySelf: "center" }}
      >
        <SystemNode label="UI" />
      </Box>
      <HorizontalConnector gridColumn={2} gridRow={1} />
      <Box
        data-node="true"
        sx={{ gridColumn: 3, gridRow: 1, justifySelf: "center" }}
      >
        <SystemNode label="API" tone="primary" />
      </Box>
      <HorizontalConnector delay="0.2s" gridColumn={4} gridRow={1} />
      <Box
        data-node="true"
        sx={{ gridColumn: 5, gridRow: 1, justifySelf: "center" }}
      >
        <SystemNode label="SVC" />
      </Box>

      <VerticalConnector delay="0.4s" gridColumn={3} gridRow={2} />
      <VerticalConnector delay="0.6s" gridColumn={5} gridRow={2} />

      <Box
        data-node="true"
        sx={{ gridColumn: 3, gridRow: 3, justifySelf: "center" }}
      >
        <SystemNode label="QUEUE" tone="secondary" />
      </Box>
      <HorizontalConnector delay="0.8s" gridColumn={4} gridRow={3} />
      <Box
        data-node="true"
        sx={{ gridColumn: 5, gridRow: 3, justifySelf: "center" }}
      >
        <SystemNode label="WORKER" />
      </Box>
      <HorizontalConnector delay="1s" gridColumn={6} gridRow={3} />
      <Box
        data-node="true"
        sx={{ gridColumn: 7, gridRow: 3, justifySelf: "center" }}
      >
        <SystemNode label="DB" />
      </Box>

      <VerticalConnector delay="1.2s" gridColumn={5} gridRow={4} />

      <Box
        data-node="true"
        sx={{ gridColumn: 5, gridRow: 5, justifySelf: "center" }}
      >
        <SystemNode label="LOGS" />
      </Box>
      <LeftConnector delay="1.4s" gridColumn={4} gridRow={5} />
      <Box
        data-node="true"
        sx={{ gridColumn: 3, gridRow: 5, justifySelf: "center" }}
      >
        <SystemNode label="OTEL" tone="secondary" />
      </Box>
    </Box>
  );
}
