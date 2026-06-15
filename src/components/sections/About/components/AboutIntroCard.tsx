import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import { Box, Stack, Typography } from "@mui/material";

type AboutIntroCardProps = {
  detail: string;
  intro: string;
};

export function AboutIntroCard({ detail, intro }: AboutIntroCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        p: { xs: 2.5, md: 3.5 },
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
        boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(135deg, rgba(0,0,0,0.38), transparent 62%)",
        },
      }}
    >
      <Stack spacing={2.5} sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            alignItems: "center",
            bgcolor: "action.hover",
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            color: "primary.main",
            display: "flex",
            height: 48,
            justifyContent: "center",
            width: 48,
          }}
        >
          <RouteOutlinedIcon fontSize="small" />
        </Box>

        <Typography
          sx={{
            color: "text.primary",
            fontSize: { xs: "1.15rem", md: "1.35rem" },
            fontWeight: 800,
            lineHeight: 1.35,
          }}
        >
          {intro}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.75,
          }}
        >
          {detail}
        </Typography>
      </Stack>
    </Box>
  );
}
