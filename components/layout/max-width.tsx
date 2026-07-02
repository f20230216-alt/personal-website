import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib";

const maxWidthClasses = {
  prose: "max-w-2xl",
  content: "max-w-4xl",
  section: "max-w-6xl",
  page: "max-w-7xl",
} as const;

type MaxWidthProps = {
  size?: keyof typeof maxWidthClasses;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export function MaxWidth({ size = "section", className, children, ...props }: MaxWidthProps) {
  return (
    <div className={cn("w-full", maxWidthClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
