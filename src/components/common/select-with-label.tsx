import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldWrapper } from "./field-wrapper";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectWithLabelProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string;
  required?: boolean;
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  options?: SelectOption[];
  children?: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

export function SelectWithLabel({
  id: propId,
  name,
  label,
  description,
  error,
  required,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select an option",
  disabled,
  options,
  children,
  containerClassName,
  labelClassName,
  triggerClassName,
  contentClassName,
}: SelectWithLabelProps) {
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
      <Select
        name={name}
        value={value}
        defaultValue={defaultValue}
        onValueChange={(val) => onValueChange?.((val as string) ?? "")}
        disabled={disabled}
        required={required}
        items={options}
      >
        <SelectTrigger
          id={id}
          size={undefined}
          className={cn(
            "w-full h-11! px-4 rounded-[10px] border border-slate-200 bg-white text-slate-900 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-600 cursor-pointer justify-between",
            error && "border-destructive focus-visible:ring-destructive/20",
            triggerClassName
          )}
        >
          <SelectValue placeholder={placeholder}>
            {options
              ? (val: any) => {
                  if (!val) return placeholder;
                  const match = options.find((o) => o.value === val);
                  return match ? match.label : val;
                }
              : undefined}
          </SelectValue>
        </SelectTrigger>

        <SelectPositioner>
          <SelectContent
            className={cn(
              "rounded-[10px] border border-slate-200 bg-white shadow-xl p-1.5 min-w-[var(--anchor-width)] z-50",
              contentClassName
            )}
          >
            {options
              ? options.map((opt) => (
                  <SelectItem
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                    className="rounded-lg px-3 py-2 text-sm text-slate-800 cursor-pointer hover:bg-slate-50 focus:bg-indigo-50 focus:text-indigo-600 transition-colors"
                  >
                    {opt.label}
                  </SelectItem>
                ))
              : children}
          </SelectContent>
        </SelectPositioner>
      </Select>
    </FieldWrapper>
  );
}
