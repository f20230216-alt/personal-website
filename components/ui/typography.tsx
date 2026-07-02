import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { designTokens } from "@/constants";
import { cn } from "@/lib";

type TypographyVariant = keyof typeof designTokens.typography;

const defaultElements = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodyLarge: "p",
  body: "p",
  bodySmall: "p",
  caption: "p",
  button: "span",
} satisfies Record<TypographyVariant, ElementType>;

type TypographyProps<TElement extends ElementType> = {
  as?: TElement;
  variant?: TypographyVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "className" | "children">;

export function Typography<TElement extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps<TElement>) {
  const Component = as ?? defaultElements[variant];

  return (
    <Component className={cn(designTokens.typography[variant], className)} {...props}>
      {children}
    </Component>
  );
}
