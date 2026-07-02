import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib";

const variantClasses = {
  neutral: "border-border bg-white/[0.04] text-muted",
  strong: "border-border-strong bg-surface-elevated text-foreground",
  accent: "border-transparent bg-accent text-accent-foreground",
} as const;

const sizeClasses = {
  sm: "px-[var(--space-2)] py-[var(--space-1)] text-xs",
  md: "px-[var(--space-3)] py-[calc(var(--space-1)+0.125rem)] text-sm",
} as const;

type BadgeProps = {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  children: ReactNode;
} & ComponentPropsWithoutRef<"span">;

export function Badge({
  variant = "neutral",
  size = "sm",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border font-medium leading-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
