import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { profileLinks } from "../../../utils/profileLinks";
import { SocialLinks } from "../../common/SocialLinks";
import { SectionHeading } from "../SectionHeading";

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
        <Stack spacing={3}>
          <SectionHeading
            title={t.home.contactTitle}
            description={t.home.contactDescription}
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              href={profileLinks.email}
              size="large"
              variant="contained"
              sx={{ minHeight: 48, px: 3 }}
            >
              {t.home.contactPrimaryAction}
            </Button>
            <Button
              href={profileLinks.linkedin}
              rel="noopener noreferrer"
              size="large"
              target="_blank"
              variant="outlined"
              sx={{ minHeight: 48, px: 3 }}
            >
              {t.home.contactSecondaryAction}
            </Button>
          </Stack>

          <Stack spacing={1.5}>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              {t.home.contactMeta}
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              <Link href={profileLinks.email} underline="hover">
                alef_mac@hotmail.com
              </Link>
            </Typography>
            <SocialLinks />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
