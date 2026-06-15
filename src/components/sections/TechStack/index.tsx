import { Box, Container, Stack, Typography } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";

export function TechStack() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="tech-stack"
      sx={{
        bgcolor: "background.paper",
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
  );
}
