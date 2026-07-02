import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib";

const maxWidthClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
} as const;

type ContainerProps<TElement extends ElementType> = {
  as?: TElement;
  size?: keyof typeof maxWidthClasses;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "className" | "children">;

export function Container<TElement extends ElementType = "div">({
  as,
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("mx-auto w-full px-[var(--space-page-x)]", maxWidthClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
