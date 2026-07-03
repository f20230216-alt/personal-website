"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { motionEasings } from "@/lib";

type MotionShellProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
};

type MotionCtaProps = MotionShellProps & {
  variant: "primary" | "secondary";
};

const revealTransition = {
  duration: 0.42,
  ease: motionEasings.standard,
} as const;

export function HeroReveal({ children, className, delay = 0, style }: MotionShellProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function HeroCta({ children, className, style, variant }: MotionCtaProps) {
  const shouldReduceMotion = useReducedMotion();

  const hover =
    !shouldReduceMotion
      ? variant === "primary"
        ? {
            y: -2,
            borderColor: "rgb(184 122 255 / 0.72)",
            boxShadow: "inset 0 0 0 1px rgb(245 245 243 / 0.07), 0 0 40px rgb(184 122 255 / 0.2)",
          }
        : {
            y: -2,
            borderColor: "rgb(245 245 243 / 0.18)",
            backgroundColor: "rgb(245 245 243 / 0.035)",
          }
      : undefined;

  return (
    <motion.div
      aria-label={variant === "primary" ? "Primary call to action placeholder" : "Secondary call to action placeholder"}
      className={className}
      style={style}
      whileHover={hover}
      whileTap={shouldReduceMotion ? undefined : { y: 0 }}
      transition={{ duration: 0.18, ease: motionEasings.standard }}
    >
      {children}
    </motion.div>
  );
}

export function HeroPhone({ children, className, style }: MotionShellProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-label="Fictional DuoLink product showcase"
      className={className}
      style={style}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      whileHover={
        !shouldReduceMotion
          ? {
              y: -4,
              boxShadow:
                "0 0 38px rgb(184 122 255 / 0.09), 0 28px 78px rgb(0 0 0 / 0.5), inset 0 1px 0 rgb(255 255 255 / 0.08), inset 0 0 0 1px rgb(255 255 255 / 0.035)",
            }
          : undefined
      }
      transition={{ duration: 0.46, delay: 0.38, ease: motionEasings.standard }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSignatureMark({ children, className }: MotionShellProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      className={className}
      whileHover={!shouldReduceMotion ? { color: "#c998ff" } : undefined}
      transition={{ duration: 0.2, ease: motionEasings.standard }}
    >
      {children}
    </motion.span>
  );
}
