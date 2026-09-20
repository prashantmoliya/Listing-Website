import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { FieldWrapper } from "./field-wrapper";

export interface InputWithLabelProps
  extends React.ComponentProps<typeof Input> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string;
  required?: boolean;
  containerClassName?: string;
  labelClassName?: string;
}

export function InputWithLabel({
  id: propId,
  label,
  description,
  error,
  required,
  className,
  containerClassName,
  labelClassName,
  ...props
}: InputWithLabelProps) {
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
      <Input
        id={id}
        required={required}
        aria-invalid={!!error}
        className={cn(
          "w-full h-11 px-4 rounded-[10px] border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-600 text-sm font-medium transition-all",
          error && "border-destructive focus-visible:ring-destructive/20",
          className
        )}
        {...props}
      />
    </FieldWrapper>
  );
}
