import { Box, Container, Stack } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { AboutHeader } from "./components/AboutHeader";
import { AboutInfoGrid } from "./components/AboutInfoGrid";
import { AboutIntroCard } from "./components/AboutIntroCard";

export function About() {
  const { t } = useTranslation();
  const aboutContent = t.home;

  return (
    <Box
      component="section"
      id="about"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.default",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 6 },
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            alignItems: "start",
          }}
        >
          <AboutHeader
            title={aboutContent.aboutTitle}
            description={aboutContent.aboutDescription}
            focusItems={aboutContent.aboutFocusItems}
          />

          <Stack spacing={2.5}>
            <AboutIntroCard
              intro={aboutContent.aboutIntro}
              detail={aboutContent.aboutDetail}
            />

            <AboutInfoGrid cards={aboutContent.aboutCards} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
