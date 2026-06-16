import type { Variants } from "framer-motion";

import type { CardMotionCustom } from "./types";

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.04,
    },
  },
};

export const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardVariants: Variants = {
  hidden: ({ direction, offset }: CardMotionCustom) => ({
    opacity: 0,
    x: direction === "left" ? -offset : offset,
    scale: offset > 0 ? 0.985 : 1,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
