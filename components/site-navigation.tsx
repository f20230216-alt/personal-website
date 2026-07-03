"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/layout";
import { cn, motionEasings } from "@/lib";

const navigationLinks = ["Work", "About", "Experience", "Writing", "Contact"] as const;

export function SiteNavigation() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 8);
  });

  const navTransition = {
    duration: shouldReduceMotion ? 0 : 0.22,
    ease: motionEasings.standard,
  } as const;

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-[var(--z-sticky)]"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.42, delay: shouldReduceMotion ? 0 : 0.08, ease: motionEasings.standard }}
    >
      <Container size="full" className="relative pr-0">
        <motion.nav
          aria-label="Primary navigation"
          className={cn(
            "pointer-events-auto flex items-center justify-between rounded-l-[var(--radius-full)] pr-[var(--space-page-x)]",
            "transition-colors duration-[var(--duration-base)]",
          )}
          animate={{
            paddingTop: isScrolled ? "0.85rem" : "1.15rem",
            paddingBottom: isScrolled ? "0.85rem" : "1.15rem",
            backgroundColor: isScrolled ? "rgb(5 5 6 / 0.34)" : "rgb(5 5 6 / 0)",
            backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
          }}
          transition={navTransition}
        >
          <a
            href="#hero-heading"
            aria-label="Sriman Goud Panjala home"
            className="rounded-[var(--radius-sm)] text-[1.5rem] leading-none text-foreground/95 transition-colors duration-[var(--duration-base)] hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            SG
          </a>

          <div className="hidden items-center gap-[clamp(2rem,4vw,4.25rem)] md:flex">
            {navigationLinks.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="group relative rounded-[var(--radius-xs)] py-[var(--space-2)] text-sm font-medium leading-none text-muted transition-colors duration-[var(--duration-base)] hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-1/2 h-px w-4 -translate-x-1/2 scale-x-0 bg-foreground/45 transition-transform duration-[var(--duration-base)] group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="hidden h-11 items-center gap-[var(--space-2)] rounded-[var(--radius-full)] border border-border px-[var(--space-5)] text-sm font-semibold leading-none text-foreground/90 transition-colors duration-[var(--duration-base)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:inline-flex"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -1,
                    borderColor: "rgb(184 122 255 / 0.42)",
                    boxShadow: "0 0 26px rgb(184 122 255 / 0.11), inset 0 0 0 1px rgb(245 245 243 / 0.04)",
                  }
            }
            whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            transition={{ duration: 0.18, ease: motionEasings.standard }}
          >
            <span>Let&apos;s connect</span>
            <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
          </motion.a>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded="false"
            className="inline-flex size-10 items-center justify-center rounded-[var(--radius-full)] border border-border text-foreground/80 transition-colors duration-[var(--duration-base)] hover:border-border-strong hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:hidden"
          >
            <Menu size={18} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </motion.nav>
        <div
          className="pointer-events-none absolute bottom-0 left-[var(--space-page-x)] right-0 hidden h-px bg-gradient-to-r from-transparent via-white/[0.035] to-transparent md:block"
          aria-hidden="true"
        />
      </Container>
    </motion.header>
  );
}
