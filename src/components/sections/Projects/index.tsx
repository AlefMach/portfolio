import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { cardVariants, headingVariants, sectionVariants } from "./motion";

export function Projects() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const shouldReduceMotion = useReducedMotion();
  const activeSectionVariants = shouldReduceMotion
    ? undefined
    : sectionVariants;
  const activeHeadingVariants = shouldReduceMotion
    ? undefined
    : headingVariants;
  const activeCardVariants = shouldReduceMotion ? undefined : cardVariants;
  const cardOffset = isXs ? 0 : isSm ? 48 : isMd ? 92 : 128;
  const viewport = isXs
    ? { amount: 0.05, margin: "0px 0px -4% 0px", once: false }
    : { amount: 0.18, margin: "0px 0px -12% 0px", once: false };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        bgcolor: "background.default",
        borderTop: 1,
        borderColor: "divider",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={viewport}
        variants={activeSectionVariants}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={4}>
            <motion.div variants={activeHeadingVariants}>
              <SectionHeading
                title={t.home.projectsTitle}
                description={t.home.projectsDescription}
              />
            </motion.div>

            <motion.div variants={activeSectionVariants}>
              <ProjectsGrid
                cardOffset={cardOffset}
                cardVariants={activeCardVariants}
                projects={t.home.projectCards}
              />
            </motion.div>
          </Stack>
        </Container>
      </motion.div>
    </Box>
  );
}
