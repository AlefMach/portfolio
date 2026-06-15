import { Box, Container, Stack } from "@mui/material";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { useTranslation } from "../../../hooks/useTranslation";
import { BuildProcessHeading } from "./components/BuildProcessHeading";
import { Pipeline } from "./components/Pipeline";
import { sectionVariants } from "./motion";
import { getPipelineSteps, getStageLabels } from "./utils";

export function BuildProcess() {
  const { language, t } = useTranslation();
  const shouldReduceMotion = Boolean(useReducedMotion());
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.25,
    margin: "0px 0px -12% 0px",
    once: true,
  });
  const steps = getPipelineSteps(
    t.home.buildPrinciples,
    getStageLabels(language),
  );

  return (
    <Box
      component="section"
      id="build-process"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <motion.div
        ref={sectionRef}
        animate={shouldReduceMotion || isInView ? "visible" : "hidden"}
        initial={shouldReduceMotion ? false : "hidden"}
        variants={shouldReduceMotion ? undefined : sectionVariants}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={4}>
            <BuildProcessHeading
              title={t.home.buildTitle}
              description={t.home.buildDescription}
              shouldReduceMotion={shouldReduceMotion}
            />

            <Pipeline steps={steps} shouldReduceMotion={shouldReduceMotion} />
          </Stack>
        </Container>
      </motion.div>
    </Box>
  );
}
