"use client";

import { Inbox, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InquiriesEmptyProps {
  hasFilters?: boolean;
  onResetFilters?: () => void;
}

export function InquiriesEmpty({
  hasFilters = false,
  onResetFilters,
}: InquiriesEmptyProps) {
  return (
    <div className="p-12 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center flex flex-col items-center justify-center">
      <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center mb-4">
        <Inbox size={26} />
      </div>

      <h3 className="text-base font-bold text-slate-900">
        {hasFilters ? "No matching inquiries found" : "No customer inquiries yet"}
      </h3>

      <p className="text-xs text-slate-500 max-w-sm mt-1 mb-5 leading-relaxed">
        {hasFilters
          ? "Try adjusting your search keywords, business filter, or status tab to find what you are looking for."
          : "When customers submit service quotes or inquiries on your business listings, they will automatically appear here."}
      </p>

      {hasFilters && onResetFilters && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onResetFilters}
          className="h-9 px-4 rounded-xl text-xs font-semibold gap-1.5 cursor-pointer"
        >
          <RotateCcw size={13} />
          <span>Reset Filters</span>
        </Button>
      )}
    </div>
  );
}
