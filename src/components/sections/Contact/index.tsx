import { Box, Container, Stack } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";

export function Contact() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="contact"
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
            title={t.home.contactTitle}
            description={t.home.contactDescription}
          />

          <Box
            sx={{
              display: "grid",
              gap: { xs: 4, md: 5 },
              gridTemplateColumns: {
                xs: "1fr",
                md: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
              },
            }}
          >
            <ContactInfo
              email="alef_mac@hotmail.com"
              meta={t.home.contactMeta}
              primaryAction={t.home.contactPrimaryAction}
              secondaryAction={t.home.contactSecondaryAction}
            />
            <ContactForm labels={t.home.contactForm} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
