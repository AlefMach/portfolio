import { alpha, Box, Stack, Typography } from "@mui/material";

import type { ProjectCaseField } from "../types";

type ProjectCaseFieldsProps = {
  fields: ProjectCaseField[];
};

export function ProjectCaseFields({ fields }: ProjectCaseFieldsProps) {
  if (fields.length === 0) {
    return null;
  }

  return (
    <Stack spacing={1.5} sx={{ mt: "auto" }}>
      {fields.map((field) => (
        <Box
          key={field.label}
          sx={{
            borderLeft: 2,
            borderColor: (theme) => alpha(theme.palette.primary.main, 0.5),
            pl: 1.5,
          }}
        >
          <Typography
            component="h4"
            sx={{
              color: "text.primary",
              fontSize: "0.8rem",
              fontWeight: 800,
              lineHeight: 1.4,
              mb: 0.5,
            }}
          >
            {field.label}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "0.9rem",
              lineHeight: 1.65,
            }}
          >
            {field.text}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}
