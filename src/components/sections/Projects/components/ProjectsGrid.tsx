import { alpha, Box } from "@mui/material";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { RefObject } from "react";

import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";

type CardMotionCustom = {
  delay: number;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: ({ delay }: CardMotionCustom = { delay: 0 }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type ProjectsGridProps = {
  canScrollNext: boolean;
  canScrollPrevious: boolean;
  isMobile: boolean;
  onScroll: () => void;
  projects: readonly Project[];
  scrollProgress: number;
  scrollerRef: RefObject<HTMLUListElement | null>;
  shouldAnimate: boolean;
};

export function ProjectsGrid({
  canScrollNext,
  canScrollPrevious,
  isMobile,
  onScroll,
  projects,
  scrollProgress,
  scrollerRef,
  shouldAnimate,
}: ProjectsGridProps) {
  return (
    <Box
      sx={{
        mx: { xs: -2, sm: -3 },
        position: "relative",
        "&::before, &::after": {
          bottom: 1,
          content: '""',
          display: { xs: "none", sm: "block" },
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          width: { xs: 28, sm: 56 },
          zIndex: 2,
        },
        "&::before": {
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.background.default} 16%, ${alpha(
              theme.palette.background.default,
              0,
            )})`,
          left: 0,
          opacity: canScrollPrevious ? 1 : 0,
          transition: "opacity 0.2s ease",
        },
        "&::after": {
          background: (theme) =>
            `linear-gradient(270deg, ${theme.palette.background.default} 16%, ${alpha(
              theme.palette.background.default,
              0,
            )})`,
          opacity: canScrollNext ? 1 : 0,
          right: 0,
          transition: "opacity 0.2s ease",
        },
      }}
    >
      <Box
        component="ul"
        onScroll={onScroll}
        ref={scrollerRef}
        sx={{
          display: "grid",
          gap: { xs: 1.5, md: 3 },
          gridAutoColumns: {
            xs: "calc(100vw - 32px)",
            sm: "minmax(360px, 44%)",
            md: "minmax(410px, 38%)",
            lg: "minmax(440px, 34%)",
          },
          gridAutoFlow: "column",
          listStyle: "none",
          m: 0,
          overflowX: "auto",
          overscrollBehaviorX: "contain",
          px: { xs: 2, sm: 3 },
          pb: { xs: 0.5, sm: 1.5 },
          pt: 0.5,
          scrollPaddingInline: { xs: 16, sm: 24 },
          scrollSnapType: "x mandatory",
          scrollbarColor: (theme) =>
            `${alpha(theme.palette.primary.main, 0.65)} ${alpha(
              theme.palette.action.hover,
              0.9,
            )}`,
          scrollbarWidth: "thin",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": {
            display: { xs: "none", sm: "block" },
            height: 8,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "action.hover",
            borderRadius: 999,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "primary.main",
            borderRadius: 999,
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectMotionItem
            key={`${project.image}-${index}`}
            index={index}
            isMobile={isMobile}
            project={project}
            shouldAnimate={shouldAnimate}
          />
        ))}
      </Box>

      <Box
        aria-hidden="true"
        sx={{
          bgcolor: (theme) => alpha(theme.palette.text.primary, 0.1),
          borderRadius: 999,
          display: { xs: "block", sm: "none" },
          height: 3,
          mx: 2,
          mt: 1.5,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            borderRadius: "inherit",
            height: "100%",
            transform: `scaleX(${Math.max(scrollProgress, 0.08)})`,
            transformOrigin: "left",
            transition: "transform 0.18s ease",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}

type ProjectMotionItemProps = {
  index: number;
  isMobile: boolean;
  project: Project;
  shouldAnimate: boolean;
};

function ProjectMotionItem({
  index,
  isMobile,
  project,
  shouldAnimate,
}: ProjectMotionItemProps) {
  return (
    <motion.li
      initial={shouldAnimate ? "hidden" : false}
      custom={{ delay: isMobile ? 0 : index * 0.04 }}
      style={{
        display: "flex",
        listStyle: "none",
        minHeight: "100%",
        scrollSnapAlign: "start",
      }}
      variants={shouldAnimate ? cardVariants : undefined}
      viewport={{
        amount: isMobile ? 0.18 : 0.32,
        margin: "0px 0px -8% 0px",
        once: !isMobile,
      }}
      whileInView={shouldAnimate ? "visible" : undefined}
    >
      <ProjectCard project={project} />
    </motion.li>
  );
}
