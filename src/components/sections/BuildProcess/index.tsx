import { Box, Container, Stack } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";

export function BuildProcess() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="build-process"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.default",
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
  );
}
