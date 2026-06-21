import { Box, Container } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { downloadResumePdf } from "../../../utils/resumePdf";
import { HeroContent } from "./components/HeroContent";
import { HeroProfile } from "./components/HeroProfile";

export function Hero() {
  const { language, t } = useTranslation();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        alignItems: "center",
        display: "flex",
        minHeight: { xs: "calc(100svh - 64px)", md: "calc(100vh - 72px)" },
        py: { xs: 5, sm: 7, md: 7, lg: 8 },
        "@media (min-width: 900px) and (max-height: 900px)": {
          py: 5,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 5, lg: 7 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1.1fr .9fr",
              lg: "1.15fr .85fr",
            },
            alignItems: "center",
            "@media (min-width: 900px) and (max-height: 900px)": {
              gap: 4,
            },
          }}
        >
          <HeroContent
            description={t.hero.description}
            eyebrow={t.hero.eyebrow}
            onDownloadResume={() => downloadResumePdf(language, t)}
            primaryAction={t.hero.primaryAction}
            resumeAction={t.hero.resumeAction}
            secondaryAction={t.hero.secondaryAction}
            skills={t.hero.skills}
            title={t.hero.title}
          />

          <HeroProfile />
        </Box>
      </Container>
    </Box>
  );
}
