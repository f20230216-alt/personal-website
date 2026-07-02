import type { ReactNode } from "react";
import { Stack } from "@/components/layout";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <Stack
      gap="sm"
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Typography as="p" variant="caption" className="font-medium uppercase text-subtle">
          {eyebrow}
        </Typography>
      ) : null}
      <Typography as="h2" variant="h2">
        {title}
      </Typography>
      {description ? (
        <Typography variant="bodyLarge" className="text-muted">
          {description}
        </Typography>
      ) : null}
    </Stack>
  );
}
