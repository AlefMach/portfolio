import { Box, Typography } from "@mui/material";

type SectionHeadingProps = {
  description: string;
  title: string;
};

export function SectionHeading({ description, title }: SectionHeadingProps) {
  return (
    <Box sx={{ maxWidth: 720 }}>
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: 800,
          letterSpacing: 0,
          lineHeight: 1.1,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: { xs: "1rem", md: "1.125rem" },
          lineHeight: 1.7,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
