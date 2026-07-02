import type { Variants } from "framer-motion";

export const motionDurations = {
  fast: 0.16,
  base: 0.24,
  slow: 0.4,
} as const;

export const motionEasings = {
  standard: [0.2, 0, 0, 1],
} as const;

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionDurations.base, ease: motionEasings.standard },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDurations.slow, ease: motionEasings.standard },
  },
};

export const scale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionDurations.base, ease: motionEasings.standard },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};
