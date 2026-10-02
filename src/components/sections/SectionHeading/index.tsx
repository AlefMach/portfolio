import { Box, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  description: string;
  title: string;
};

export function SectionHeading({ description, title }: SectionHeadingProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <Box
      component={motion.div}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      sx={{ maxWidth: 720 }}
    >
      <Box
        aria-hidden
        sx={{
          width: 48,
          height: 4,
          borderRadius: 2,
          mb: 2,
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      />
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
