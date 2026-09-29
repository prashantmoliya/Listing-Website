import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React from "react";

type PopoverMenuProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  contentClass?: string;
  trigger: React.ReactElement;
  children: React.ReactNode;
};

export function PopoverMenu({
  open,
  onOpenChange,
  align,
  side,
  sideOffset,
  contentClass,
  trigger,
  children,
}: PopoverMenuProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align={align}
        side={side}
        sideOffset={sideOffset}
        className={cn(contentClass)}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}
