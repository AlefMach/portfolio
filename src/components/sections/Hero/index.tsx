import { Box, Container, useTheme } from "@mui/material";
import { lazy, type PointerEvent as ReactPointerEvent,Suspense, useCallback, useRef } from "react";

import { useTranslation } from "../../../hooks/useTranslation";
import { downloadResumePdf } from "../../../utils/resumePdf";
import { HeroContent } from "./components/HeroContent";
import { HeroProfile } from "./components/HeroProfile";

const HeroScene = lazy(() =>
  import("./components/HeroScene").then((m) => ({ default: m.HeroScene })),
);

export function Hero() {
  const { language, t } = useTranslation();
  const theme = useTheme();
  const glow = theme.palette.mode === "dark" ? "0, 255, 194" : "91, 91, 214";
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;
    const rect = event.currentTarget.getBoundingClientRect();
    spotlight.style.transform = `translate(${event.clientX - rect.left - 180}px, ${event.clientY - rect.top - 180}px)`;
    spotlight.style.opacity = "1";
  }, []);

  const handlePointerLeave = useCallback(() => {
    const spotlight = spotlightRef.current;
    if (spotlight) spotlight.style.opacity = "0";
  }, []);

  return (
    <Box
      component="section"
      id="home"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      sx={{
        alignItems: "center",
        display: "flex",
        minHeight: { xs: "calc(100svh - 64px)", md: "calc(100svh - 72px)" },
        position: "relative",
        overflow: "hidden",
        pt: { xs: 5, sm: 7, md: 7, lg: 8 },
        pb: { xs: 5, sm: 7, md: 7, lg: 8 },
        "@media (min-width: 900px) and (min-height: 901px)": {
          pb: "clamp(5rem, 10vh, 8rem)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          maxWidth: 720,
          maxHeight: 720,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${glow}, 0.16) 0%, rgba(${glow}, 0) 65%)`,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <Box
        ref={spotlightRef}
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${glow}, 0.12) 0%, rgba(${glow}, 0) 70%)`,
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, position: "relative", zIndex: 1 }}>
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
