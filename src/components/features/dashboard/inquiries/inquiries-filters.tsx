"use client";

import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface InquiryStatusTabItem {
  id: string;
  label: string;
  count: number;
}

interface InquiriesFiltersProps {
  tabs: InquiryStatusTabItem[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function InquiriesFilters({
  tabs,
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: InquiriesFiltersProps) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Status Tabs */}
        <Tabs
          value={activeFilter}
          onValueChange={(val) => onFilterChange(val as string)}
          className="w-full lg:w-auto"
        >
          <TabsList className="h-10 p-1 bg-slate-50/90 rounded-xl flex items-center gap-1 overflow-x-auto w-full sm:w-auto border border-slate-200/70">
            {tabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    "text-xs font-semibold px-3.5 py-1.5 rounded-[9px] transition-all flex items-center gap-2 cursor-pointer border",
                    isActive
                      ? "bg-white text-indigo-600 shadow-xs border-slate-200/70 font-bold"
                      : "text-slate-500 hover:text-slate-800 hover:bg-white/60 border-transparent"
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.2 rounded-full text-[10px] font-bold transition-colors",
                      isActive
                        ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
                        : "bg-slate-200/60 text-slate-500"
                    )}
                  >
                    {tab.count}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {/* Search Input */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by customer, phone, email, service..."
            className="w-full h-10 pl-9 pr-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-500 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
