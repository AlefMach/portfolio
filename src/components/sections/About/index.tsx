import { Box, Container } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";

export function About() {
  const { t } = useTranslation();

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
        <SectionHeading
          title={t.home.aboutTitle}
          description={t.home.aboutDescription}
        />
      </Container>
    </Box>
  );
}
