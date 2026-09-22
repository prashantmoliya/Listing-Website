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
  rightElement?: React.ReactNode;
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
  rightElement,
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
      <div className="relative w-full">
        <Input
          id={id}
          required={required}
          aria-invalid={!!error}
          className={cn(
            "w-full h-11 px-4 rounded-[10px] border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-600 text-sm font-medium transition-all",
            rightElement && "pr-11",
            error && "border-destructive focus-visible:ring-destructive/20",
            className
          )}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
            {rightElement}
          </div>
        )}
      </div>
    </FieldWrapper>
  );
}
