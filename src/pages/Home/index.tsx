import { Box, Container, Stack, Typography } from "@mui/material";

import { Hero } from "../../components/sections/Hero";
import { Projects } from "../../components/sections/Projects";
import { useTranslation } from "../../hooks/useTranslation";

type SectionHeadingProps = {
  description: string;
  title: string;
};

function SectionHeading({ description, title }: SectionHeadingProps) {
  return (
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
        {title}
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: { xs: "1rem", md: "1.125rem" },
          lineHeight: 1.7,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <Box component="main" sx={{ flex: 1 }}>
      <Hero />

      <Box
        component="section"
        id="sobre"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <SectionHeading
            title={t.home.aboutTitle}
            description={t.home.aboutDescription}
          />
        </Container>
      </Box>

      <Projects />

      <Box
        component="section"
        id="how-to-build"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={4}>
            <SectionHeading
              title={t.home.buildTitle}
              description={t.home.buildDescription}
            />

            <Box
              sx={{
                display: "grid",
                gap: { xs: 1.5, md: 2 },
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                },
              }}
            >
              {t.home.buildPrinciples.map((principle) => (
                <Box
                  key={principle}
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 2,
                    color: "text.secondary",
                    fontWeight: 700,
                    lineHeight: 1.5,
                    p: { xs: 2, md: 2.5 },
                  }}
                >
                  {principle}
                </Box>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        id="stack"
        sx={{
          bgcolor: "background.default",
          borderTop: 1,
          borderColor: "divider",
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={4}>
            <SectionHeading
              title={t.home.stackTitle}
              description={t.home.stackDescription}
            />

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
              {t.home.stackCategories.map((category) => (
                <Stack
                  key={category.title}
                  spacing={2}
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 2,
                    p: { xs: 2.5, md: 3 },
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{ fontSize: "1.125rem", fontWeight: 800 }}
                  >
                    {category.title}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {category.items.map((item) => (
                      <Box
                        key={item}
                        component="span"
                        sx={{
                          border: 1,
                          borderColor: "divider",
                          borderRadius: 999,
                          color: "text.secondary",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          lineHeight: 1,
                          px: 1.25,
                          py: 0.75,
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                </Stack>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        id="explore"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={4}>
            <SectionHeading
              title={t.home.exploringTitle}
              description={t.home.exploringDescription}
            />

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {t.home.exploringItems.map((item) => (
                <Box
                  key={item}
                  component="span"
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 999,
                    color: "text.secondary",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    px: 1.5,
                    py: 1,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        id="contact"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <SectionHeading
            title={t.home.contactTitle}
            description={t.home.contactDescription}
          />
        </Container>
      </Box>
    </Box>
  );
}
