import { Box, Container, Typography } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        py: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          {t.footer.title}
        </Typography>
      </Container>
    </Box>
  );
}
