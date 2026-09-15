import * as React from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { FieldWrapper } from "./field-wrapper";

export interface TextareaWithLabelProps
  extends React.ComponentProps<"textarea"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string;
  required?: boolean;
  rows?: number;
  containerClassName?: string;
  labelClassName?: string;
}

export function TextareaWithLabel({
  id: propId,
  label,
  description,
  error,
  required,
  rows = 5,
  className,
  containerClassName,
  labelClassName,
  ...props
}: TextareaWithLabelProps) {
  const generatedId = React.useId();
  const id = propId || generatedId;

  return (
    <FieldWrapper
      id={id}
      label={label}
      description={description}
      error={error}
      required={required}
      className={containerClassName}
      labelClassName={labelClassName}
    >
      <Textarea
        id={id}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        className={cn(
          "field-sizing-fixed w-full px-4 py-3 rounded-[10px] border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-600 text-sm font-medium transition-all resize-none",
          error && "border-destructive focus-visible:ring-destructive/20",
          className
        )}
        {...props}
      />
    </FieldWrapper>
  );
}
