import { Box, Container, Stack } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { StackCategoryGrid } from "./components/StackCategoryGrid";
import { StackHeader } from "./components/StackHeader";

export function TechStack() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="tech-stack"
      sx={{
        bgcolor: "background.default",
        borderTop: 1,
        borderColor: "divider",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack spacing={4}>
          <StackHeader
            title={t.home.stackTitle}
            description={t.home.stackDescription}
          />

          <StackCategoryGrid
            categories={t.home.stackCategories}
            toolsLabel={t.home.stackToolsLabel}
          />
        </Stack>
      </Container>
    </Box>
  );
}
