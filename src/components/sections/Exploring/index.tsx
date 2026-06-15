import { Box, Container, Stack } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";
import { ExploringGrid } from "./components/ExploringGrid";

export function Exploring() {
  const { t } = useTranslation();
  const exploringContent = t.home;

  return (
    <Box
      component="section"
      id="exploring"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack spacing={4}>
          <SectionHeading
            title={exploringContent.exploringTitle}
            description={exploringContent.exploringDescription}
          />

          <ExploringGrid cards={exploringContent.exploringCards} />
        </Stack>
      </Container>
    </Box>
  );
}
