import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {
  alpha,
  Box,
  Container,
  IconButton,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { headingVariants, sectionVariants } from "./motion";

export function Projects() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isMobile = isXs;
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeSectionVariants = shouldReduceMotion
    ? undefined
    : sectionVariants;
  const activeHeadingVariants = shouldReduceMotion
    ? undefined
    : headingVariants;
  const viewport = isXs
    ? { amount: 0.01, margin: "0px 0px 8% 0px", once: false }
    : { amount: 0.05, margin: "0px 0px 18% 0px", once: false };
  const updateScrollState = useCallback(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    const nextProgress =
      maxScrollLeft <= 0 ? 0 : scroller.scrollLeft / maxScrollLeft;

    setCanScrollPrevious(scroller.scrollLeft > 8);
    setCanScrollNext(scroller.scrollLeft < maxScrollLeft - 8);
    setScrollProgress(Math.min(Math.max(nextProgress, 0), 1));
  }, []);
  const scrollProjects = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      behavior: "smooth",
      left: direction * scroller.clientWidth * 0.82,
    });
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("resize", updateScrollState);
    };
  }, [t.home.projectCards.length, updateScrollState]);

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        bgcolor: "background.default",
        borderTop: 1,
        borderColor: "divider",
        overflow: "hidden",
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
              <Box
                sx={{
                  alignItems: { sm: "flex-end" },
                  display: { sm: "flex" },
                  gap: 3,
                  justifyContent: "space-between",
                }}
              >
                <SectionHeading
                  title={t.home.projectsTitle}
                  description={t.home.projectsDescription}
                />

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    flexShrink: 0,
                    pb: 0.5,
                  }}
                >
                  <Tooltip title="Projetos anteriores">
                    <span>
                      <IconButton
                        aria-label="Projetos anteriores"
                        disabled={!canScrollPrevious}
                        onClick={() => scrollProjects(-1)}
                        size="small"
                        sx={{
                          backdropFilter: "blur(12px)",
                          bgcolor: alpha(theme.palette.background.paper, 0.82),
                          border: 1,
                          borderColor: "divider",
                          boxShadow: `0 12px 30px ${alpha(
                            theme.palette.common.black,
                            0.12,
                          )}`,
                          color: "text.primary",
                          "&:hover": {
                            bgcolor: "background.paper",
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        <ArrowBackRoundedIcon fontSize="small" />
                      </IconButton>
                    </span>
                  </Tooltip>

                  <Tooltip title="Próximos projetos">
                    <span>
                      <IconButton
                        aria-label="Próximos projetos"
                        disabled={!canScrollNext}
                        onClick={() => scrollProjects(1)}
                        size="small"
                        sx={{
                          backdropFilter: "blur(12px)",
                          bgcolor: alpha(theme.palette.background.paper, 0.82),
                          border: 1,
                          borderColor: "divider",
                          boxShadow: `0 12px 30px ${alpha(
                            theme.palette.common.black,
                            0.12,
                          )}`,
                          color: "text.primary",
                          "&:hover": {
                            bgcolor: "background.paper",
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        <ArrowForwardRoundedIcon fontSize="small" />
                      </IconButton>
                    </span>
                  </Tooltip>
                </Stack>
              </Box>
            </motion.div>

            <motion.div variants={activeSectionVariants}>
              <ProjectsGrid
                canScrollNext={canScrollNext}
                canScrollPrevious={canScrollPrevious}
                isMobile={isMobile}
                onScroll={updateScrollState}
                projects={t.home.projectCards}
                scrollProgress={scrollProgress}
                scrollerRef={scrollerRef}
                shouldAnimate={!shouldReduceMotion}
              />
            </motion.div>
          </Stack>
        </Container>
      </motion.div>
    </Box>
  );
}
