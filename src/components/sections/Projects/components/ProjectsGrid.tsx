import { Box } from "@mui/material";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

import type { Project } from "../types";
import { getProjectMotionCustom } from "../utils";
import { ProjectCard } from "./ProjectCard";

type ProjectsGridProps = {
  cardOffset: number;
  cardVariants?: Variants;
  projects: readonly Project[];
};

export function ProjectsGrid({
  cardOffset,
  cardVariants,
  projects,
}: ProjectsGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: { xs: 2, md: 3 },
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
        },
      }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={`${project.image}-${index}`}
          custom={getProjectMotionCustom(index, cardOffset)}
          variants={cardVariants}
          style={{ display: "flex", minHeight: "100%" }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </Box>
  );
}
