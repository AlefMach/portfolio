import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: theme.zIndex.appBar,
          }}
        >
          <Fab
            aria-label="Voltar ao topo"
            size="small"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            sx={{
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #00FFC2, #2dd4bf)"
                  : "linear-gradient(135deg, #5B5BD6, #7c6cf0)",
              color: theme.palette.mode === "dark" ? "#082f49" : "#fff",
              "&:hover": { filter: "brightness(1.1)" },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
