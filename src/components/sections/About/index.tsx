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
        py: { xs: 5, sm: 7, md: 7, lg: 10 },
        "@media (min-width: 900px) and (max-height: 820px)": {
          py: 5,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3.5, md: 4, lg: 6 },
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
              lg: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            },
            alignItems: "start",
            "@media (min-width: 900px) and (max-height: 820px)": {
              gap: 3,
            },
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
