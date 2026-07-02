export type ComponentSize = "sm" | "md" | "lg";
export type ComponentVariant = "primary" | "secondary" | "ghost";
export type WithClassName<T = object> = T & {
  className?: string;
};
