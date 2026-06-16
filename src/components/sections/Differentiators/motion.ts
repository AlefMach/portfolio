import type { Variants } from "framer-motion";

const motionEase = [0.22, 1, 0.36, 1] as const;

export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

export const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: motionEase,
    },
  },
};
