import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { alpha, Box, Link, Stack, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import type { Project } from "../types";
import { getProjectCaseFields } from "../utils";
import { ProjectCaseFields } from "./ProjectCaseFields";
import { ProjectTags } from "./ProjectTags";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const hasLink = "link" in project && Boolean(project.link);
  const buttonLabel = "button" in project ? project.button : undefined;
  const caseFields = getProjectCaseFields(project);

  return (
    <Box
      className="project-card-root"
      component={hasLink ? "a" : "div"}
      href={hasLink ? project.link : undefined}
      target={hasLink ? "_blank" : undefined}
      rel={hasLink ? "noopener noreferrer" : undefined}
      sx={{
        backdropFilter: { xs: "none", sm: "blur(18px)" },
        background: (theme) =>
          theme.palette.mode === "dark"
            ? `linear-gradient(180deg, ${alpha(
                theme.palette.common.white,
                0.08,
              )}, ${alpha(theme.palette.common.white, 0.035)})`
            : `linear-gradient(180deg, ${theme.palette.background.default}, ${alpha(
                theme.palette.primary.main,
                0.035,
              )})`,
        border: 1,
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? alpha(theme.palette.common.white, 0.14)
            : alpha(theme.palette.common.black, 0.09),
        borderRadius: { xs: 2, sm: 2.5 },
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? {
                xs: `0 14px 36px ${alpha(theme.palette.common.black, 0.24)}`,
                sm: `0 24px 70px ${alpha(theme.palette.common.black, 0.32)}`,
              }
            : {
                xs: `0 12px 28px ${alpha(theme.palette.common.black, 0.07)}`,
                sm: `0 22px 56px ${alpha(theme.palette.common.black, 0.08)}`,
              },
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        overflow: "hidden",
        position: "relative",
        textDecoration: "none",
        transition:
          "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        width: "100%",
        "&::before": {
          background:
            "linear-gradient(90deg, transparent, rgba(0, 255, 194, 0.92), rgba(96, 165, 250, 0.92), transparent)",
          content: '""',
          height: 2,
          left: 0,
          opacity: 0,
          position: "absolute",
          right: 0,
          top: 0,
          transform: "scaleX(0.28)",
          transformOrigin: "left",
          transition: "opacity 0.2s ease, transform 0.35s ease",
          zIndex: 2,
        },
        "&:hover": hasLink
          ? {
              borderColor: "primary.main",
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? `0 30px 88px ${alpha(theme.palette.primary.main, 0.14)}`
                  : `0 28px 70px ${alpha(theme.palette.common.black, 0.14)}`,
              transform: "translateY(-6px)",
              "&::before": {
                opacity: 1,
                transform: "scaleX(1)",
              },
            }
          : {},
        "@media (hover: none)": {
          "&:hover": {
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? `0 14px 36px ${alpha(theme.palette.common.black, 0.24)}`
                : `0 12px 28px ${alpha(theme.palette.common.black, 0.07)}`,
            transform: "none",
          },
        },
        "&:hover .project-card-image": hasLink
          ? {
              transform: "scale(1.035)",
            }
          : {},
        "&:hover .project-card-sheen": hasLink
          ? {
              opacity: 0.9,
            }
          : {},
        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          transition: "none",
          "&:hover": {
            transform: "none",
          },
        },
      }}
    >
      <Box
        sx={{
          aspectRatio: { xs: "16 / 10", sm: "16 / 9" },
          bgcolor: "action.hover",
          overflow: "hidden",
          position: "relative",
          "&::after": {
            background:
              "linear-gradient(180deg, transparent 45%, rgba(0, 0, 0, 0.42))",
            bottom: 0,
            content: '""',
            left: 0,
            opacity: 0.72,
            pointerEvents: "none",
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 1,
          },
        }}
      >
        <Box
          className="project-card-image"
          component="img"
          src={project.image}
          alt={project.alt}
          loading="lazy"
          sx={{
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.45s ease",
            width: "100%",
          }}
        />
        <Box
          aria-hidden="true"
          className="project-card-sheen"
          component={motion.span}
          animate={shouldReduceMotion ? undefined : { x: ["-140%", "190%"] }}
          transition={{
            duration: 3.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.7,
          }}
          sx={{
            background:
              "linear-gradient(105deg, transparent 28%, rgba(255, 255, 255, 0.5), transparent 72%)",
            display: "block",
            height: "120%",
            left: 0,
            opacity: 0.45,
            pointerEvents: "none",
            position: "absolute",
            top: "-10%",
            transform: "skewX(-16deg)",
            width: "34%",
            zIndex: 2,
          }}
        />
      </Box>

      <Stack
        spacing={2}
        sx={{
          flex: 1,
          p: { xs: 2, sm: 2.5, md: 3 },
          position: "relative",
        }}
      >
        <Box>
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: "1.02rem", md: "1.18rem" },
              fontWeight: 800,
              letterSpacing: 0,
              lineHeight: 1.25,
              mb: 1,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.9rem", sm: "0.95rem" },
              lineHeight: { xs: 1.6, sm: 1.7 },
            }}
          >
            {project.description}
          </Typography>
        </Box>

        <ProjectTags
          hasCaseFields={caseFields.length > 0}
          tags={project.tags}
        />

        <ProjectCaseFields fields={caseFields} />

        {hasLink && buttonLabel && (
          <Link
            component="span"
            underline="none"
            sx={{
              alignItems: "center",
              alignSelf: "flex-start",
              border: 1,
              borderColor: "divider",
              borderRadius: 999,
              color: "text.primary",
              display: "inline-flex",
              fontSize: "0.875rem",
              fontWeight: 800,
              gap: 0.75,
              mt: 0.5,
              px: 1.5,
              py: 0.9,
              transition:
                "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease",
              ".project-card-root:hover &": {
                bgcolor: "primary.main",
                borderColor: "primary.main",
                color: "primary.contrastText",
              },
            }}
          >
            {buttonLabel}
            <ArrowOutwardRoundedIcon sx={{ fontSize: 17 }} />
          </Link>
        )}
      </Stack>
    </Box>
  );
}
