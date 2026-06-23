import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide";
};

const containerSizes = {
  default: "max-w-7xl",
  wide: "max-w-8xl",
};

export function Container({ className, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-10",
        containerSizes[size],
        className
      )}
      {...props}
    />
  );
}
