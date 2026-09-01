import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "sm" | "md" | "lg" | "xl" | "full";
};

const containerSizes = {
  default: "max-w-7xl",
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  full: "max-w-full",
};

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        containerSizes[size],
        className
      )}
      {...props}
    />
  );
}
