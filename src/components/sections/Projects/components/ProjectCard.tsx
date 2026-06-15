import { Box, Link, Stack, Typography } from "@mui/material";

import type { Project } from "../types";
import { getProjectCaseFields } from "../utils";
import { ProjectCaseFields } from "./ProjectCaseFields";
import { ProjectTags } from "./ProjectTags";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = "link" in project && Boolean(project.link);
  const buttonLabel = "button" in project ? project.button : undefined;
  const caseFields = getProjectCaseFields(project);

  return (
    <Box
      component={hasLink ? "a" : "div"}
      href={hasLink ? project.link : undefined}
      target={hasLink ? "_blank" : undefined}
      rel={hasLink ? "noopener noreferrer" : undefined}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        overflow: "hidden",
        textDecoration: "none",
        transition:
          "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        width: "100%",
        "&:hover": hasLink
          ? {
              borderColor: "primary.main",
              boxShadow: 2,
              transform: "translateY(-4px)",
            }
          : {},
        "&:hover .project-card-image": hasLink
          ? {
              transform: "scale(1.025)",
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
        className="project-card-image"
        component="img"
        src={project.image}
        alt={project.alt}
        loading="lazy"
        sx={{
          aspectRatio: "16 / 9",
          bgcolor: "action.hover",
          objectFit: "cover",
          transition: "transform 0.35s ease",
          width: "100%",
        }}
      />

      <Stack spacing={2} sx={{ flex: 1, p: { xs: 2.5, md: 3 } }}>
        <Box>
          <Typography
            component="h3"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 800,
              mb: 1,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 1.7,
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
          <Link component="span" underline="hover" sx={{ fontWeight: 700 }}>
            {buttonLabel} →
          </Link>
        )}
      </Stack>
    </Box>
  );
}
