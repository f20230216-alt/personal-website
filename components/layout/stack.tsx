import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib";

const gapClasses = {
  xs: "gap-[var(--space-2)]",
  sm: "gap-[var(--space-3)]",
  md: "gap-[var(--space-5)]",
  lg: "gap-[var(--space-8)]",
  xl: "gap-[var(--space-12)]",
} as const;

type StackProps = {
  gap?: keyof typeof gapClasses;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export function Stack({ gap = "md", className, children, ...props }: StackProps) {
  return (
    <div className={cn("flex flex-col", gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}
