import { Box, Container, Stack } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";

export function Exploring() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="exploring"
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
  );
}
