import { Box } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

type AboutFocusListProps = {
  items: readonly string[];
};

export function AboutFocusList({ items }: AboutFocusListProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {items.map((item, index) => (
        <Box
          key={item}
          component={motion.span}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
          sx={{
            border: 1,
            borderColor: "divider",
            borderRadius: 999,
            color: "text.secondary",
            fontSize: "0.75rem",
            fontWeight: 800,
            lineHeight: 1,
            px: 1.25,
            py: 0.75,
            transition: "border-color 0.2s ease, color 0.2s ease",
            "&:hover": {
              borderColor: "primary.main",
              color: "primary.main",
            },
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
}
