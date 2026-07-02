import type { ButtonHTMLAttributes, ReactNode } from "react";
import { designTokens } from "@/constants";
import { cn } from "@/lib";
import type { ComponentSize, ComponentVariant } from "@/types";

const variantClasses = {
  primary: "bg-accent text-accent-foreground hover:bg-foreground/90",
  secondary: "border border-border-strong bg-surface-elevated text-foreground hover:bg-white/[0.08]",
  ghost: "text-muted hover:bg-white/[0.06] hover:text-foreground",
} satisfies Record<ComponentVariant, string>;

const sizeClasses = {
  sm: "h-[var(--control-sm)] px-[var(--space-3)]",
  md: "h-[var(--control-md)] px-[var(--space-4)]",
  lg: "h-[var(--control-lg)] px-[var(--space-5)]",
} satisfies Record<ComponentSize, string>;

type ButtonProps = {
  variant?: ComponentVariant;
  size?: ComponentSize;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-[background,color,border-color,opacity,transform]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-45",
        designTokens.typography.button,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
