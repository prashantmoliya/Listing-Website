"use client";

import { ReactNode, FormEvent } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

export interface ModalProps {
  trigger?: ReactNode;
  title?: ReactNode;
  headTitle?: string;
  description?: ReactNode;
  headDescription?: string;
  headerIcon?: ReactNode;
  headerClassName?: string;
  children: ReactNode;
  footer?: ReactNode;
  footChildren?: ReactNode;
  footerClassName?: string;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
  asForm?: boolean;
  onSubmit?: (e: FormEvent) => void;
  maxWidth?: string;
  showCloseButton?: boolean;
  onPointerDownOutside?: (event: any) => void;
  onEscapeKeyDown?: (event: any) => void;
  noPadding?: boolean;
}

export function Modal({
  trigger,
  title,
  headTitle,
  description,
  headDescription,
  headerIcon,
  headerClassName,
  children,
  footer,
  footChildren,
  footerClassName,
  className,
  open,
  onOpenChange,
  onClose,
  asForm = false,
  onSubmit,
  maxWidth = "sm:max-w-md",
  showCloseButton = true,
  onPointerDownOutside,
  onEscapeKeyDown,
  noPadding = false,
}: ModalProps) {
  const displayTitle = title || headTitle;
  const displayDescription = description || headDescription;
  const displayFooter = footer || footChildren;

  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange?.(isOpen);
    if (!isOpen) {
      onClose?.();
    }
  };

  const ContentWrapper = asForm || onSubmit ? "form" : "div";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent
        className={cn(
          maxWidth,
          "p-0 overflow-hidden border-none shadow-menu rounded-md outline-none",
          className
        )}
        showCloseButton={showCloseButton}
        onPointerDownOutside={onPointerDownOutside}
        onEscapeKeyDown={onEscapeKeyDown}
      >
        <ContentWrapper
          onSubmit={asForm || onSubmit ? onSubmit : undefined}
          className="flex flex-col max-h-[85vh]"
        >
          {!displayTitle && (
            <DialogTitle className="sr-only">Modal Content</DialogTitle>
          )}

          {(displayTitle || displayDescription || headerIcon) && (
            <DialogHeader className={cn("p-6 pb-4 flex flex-row items-center gap-4 text-left border-b bg-muted/10", headerClassName)}>
              {headerIcon && (
                <div className="p-3 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 border border-primary/5">
                  {headerIcon}
                </div>
              )}
              <div className="flex flex-col gap-1 flex-1">
                {displayTitle && (
                  <DialogTitle className="text-xl font-bold tracking-normal text-foreground">
                    {displayTitle}
                  </DialogTitle>
                )}
                {displayDescription && (
                  <DialogDescription className="text-sm font-medium text-muted-foreground/80 leading-snug">
                    {displayDescription}
                  </DialogDescription>
                )}
              </div>
            </DialogHeader>
          )}

          <div className={cn(
            "overflow-y-auto custom-scrollbar",
            !noPadding && "p-6"
          )}>
            {children}
          </div>

          {displayFooter && (
            <DialogFooter className={cn("p-5 pt-3 border-t bg-muted/5 gap-3 sm:gap-0", footerClassName)}>
              {displayFooter}
            </DialogFooter>
          )}
        </ContentWrapper>
      </DialogContent>
    </Dialog>
  );
}
