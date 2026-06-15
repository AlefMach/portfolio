import { Box, Container, Stack, Typography } from "@mui/material";

import { Hero } from "../../components/sections/Hero";
import { useTranslation } from "../../hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Box component="main" sx={{ flex: 1 }}>
      <Hero />

      <Box
        component="section"
        id="projetos"
        sx={{
          bgcolor: "background.default",
          borderTop: 1,
          borderColor: "divider",
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={4}>
            <Box sx={{ maxWidth: 720 }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 800,
                  letterSpacing: 0,
                  lineHeight: 1.1,
                  mb: 1.5,
                }}
              >
                {t.home.projectsTitle}
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.7,
                }}
              >
                {t.home.projectsDescription}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gap: { xs: 2, md: 3 },
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                },
              }}
            >
              {t.home.projectCards.map((project) => (
                <Box
                  key={project.title}
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 2,
                    minHeight: 180,
                    p: { xs: 2.5, md: 3 },
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{ fontSize: "1.125rem", fontWeight: 800, mb: 1 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    {project.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        id="contato"
        sx={{ py: { xs: 6, sm: 8, md: 10 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box sx={{ maxWidth: 720 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 800,
                letterSpacing: 0,
                lineHeight: 1.1,
                mb: 1.5,
              }}
            >
              {t.home.contactTitle}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.7,
              }}
            >
              {t.home.contactDescription}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
