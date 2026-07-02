import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib";

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

type GridProps = {
  columns?: keyof typeof columnClasses;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export function Grid({ columns = 2, className, children, ...props }: GridProps) {
  return (
    <div className={cn("grid gap-[var(--space-6)]", columnClasses[columns], className)} {...props}>
      {children}
    </div>
  );
}
