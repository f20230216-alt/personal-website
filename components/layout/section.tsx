import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib";

type SectionProps = {
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-[var(--space-section-y)]", className)} {...props}>
      {children}
    </section>
  );
}
