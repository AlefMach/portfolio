import { Box, Typography } from "@mui/material";
import { motion, useTransform } from "framer-motion";

import { getTimelineItemRange } from "../motion";
import type { ExperienceItem, TimelineProgress } from "../types";
import { ExperienceHighlights } from "./ExperienceHighlights";

type ExperienceTimelineItemProps = {
  index: number;
  item: ExperienceItem;
  progress: TimelineProgress;
  shouldReduceMotion: boolean;
  totalItems: number;
};

export function ExperienceTimelineItem({
  index,
  item,
  progress,
  shouldReduceMotion,
  totalItems,
}: ExperienceTimelineItemProps) {
  const [start, end] = getTimelineItemRange(index, totalItems);
  const opacity = useTransform(progress, [start, end], [0.7, 1]);
  const y = useTransform(progress, [start, end], [16, 0]);
  const scale = useTransform(progress, [start, end], [0.99, 1]);
  const nodeScale = useTransform(progress, [start, end], [0.9, 1]);
  const nodeOpacity = useTransform(progress, [start, end], [0.72, 1]);
  const isRightSide = index % 2 === 0;

  return (
    <Box
      component="li"
      sx={{
        display: "grid",
        gap: { xs: 2, md: 3.5 },
        gridTemplateColumns: {
          xs: "40px minmax(0, 1fr)",
          md: "minmax(0, 1fr) 72px minmax(0, 1fr)",
        },
        listStyle: "none",
        position: "relative",
      }}
    >
      <Box
        component={motion.article}
        style={shouldReduceMotion ? undefined : { opacity, scale, y }}
        sx={{
          bgcolor: "background.default",
          border: 1,
          borderColor: "divider",
          borderRadius: 3,
          gridColumn: {
            xs: "2",
            md: isRightSide ? "3" : "1",
          },
          gridRow: 1,
          overflow: "hidden",
          p: { xs: 2.5, md: 3.25 },
          position: "relative",
          transition:
            "border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease",
          "&::before": {
            background:
              "linear-gradient(90deg, primary.main, rgba(96, 165, 250, 0))",
            content: '\"\"',
            height: 3,
            left: 0,
            opacity: 0.9,
            position: "absolute",
            right: 0,
            top: 0,
          },
          "&:hover": {
            borderColor: "primary.main",
            boxShadow: "0 20px 52px rgba(15, 23, 42, 0.12)",
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
          },
        }}
      >
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1.5,
            justifyContent: "space-between",
            mb: 2.5,
            position: "relative",
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "0.72rem",
                fontWeight: 900,
                letterSpacing: "0.1em",
                mb: 0.75,
                textTransform: "uppercase",
              }}
            >
              {`${String(index + 1).padStart(2, "0")}  /  ${item.company}`}
            </Typography>
            <Typography
              component="h3"
              sx={{ fontSize: { xs: "1.15rem", md: "1.25rem" }, fontWeight: 900 }}
            >
              {item.role}
            </Typography>
          </Box>

          <Typography
            sx={{
              alignSelf: { xs: "flex-start", sm: "center" },
              bgcolor: "action.hover",
              border: 1,
              borderColor: "divider",
              borderRadius: 999,
              color: "text.secondary",
              fontSize: "0.76rem",
              fontWeight: 800,
              lineHeight: 1,
              px: 1.15,
              py: 0.8,
              whiteSpace: "nowrap",
            }}
          >
            {item.period}
          </Typography>
        </Box>

        <ExperienceHighlights highlights={item.highlights} />
      </Box>

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          gridColumn: { xs: "1", md: "2" },
          gridRow: 1,
          justifyContent: "center",
          pt: { xs: 2.5, md: 3.25 },
          zIndex: 1,
        }}
      >
        <Box
          component={motion.span}
          style={
            shouldReduceMotion
              ? undefined
              : { opacity: nodeOpacity, scale: nodeScale }
          }
          sx={{
            alignItems: "center",
            bgcolor: "background.default",
            border: 2,
            borderColor: "primary.main",
            borderRadius: "50%",
            boxShadow: "0 0 0 7px rgba(0, 255, 194, 0.1)",
            color: "primary.main",
            display: "flex",
            fontSize: "0.62rem",
            fontWeight: 900,
            height: 30,
            justifyContent: "center",
            letterSpacing: "0.04em",
            width: 30,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </Box>
      </Box>
    </Box>
  );
}
