"use client";

import { SearchX, ArrowUpDown } from "lucide-react";
import { ListingCard, AppPagination, SelectWithLabel } from "@/components/common";
import { Button } from "@/components/ui/button";
import type { ListingItem } from "@/data";

interface ListingsGridProps {
  listings: ListingItem[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onPageChange: (page: number) => void;
  onClearFilters: () => void;
}

export function ListingsGrid({
  listings,
  totalCount,
  currentPage,
  totalPages,
  sortBy,
  onSortChange,
  onPageChange,
  onClearFilters,
}: ListingsGridProps) {
  if (totalCount === 0) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-sm flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center mb-4">
          <SearchX size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          No Listings Found
        </h3>
        <p className="text-sm text-slate-500 max-w-md mb-6 leading-relaxed">
          We couldn&apos;t find any businesses matching your search criteria. Try
          adjusting your filters or search terms.
        </p>
        <Button
          type="button"
          onClick={onClearFilters}
          className="px-6 py-2.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 h-11"
        >
          Clear All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Bar: Count & Sort */}
      <div className="bg-white rounded-2xl px-5 py-3.5 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-sm text-slate-600 font-medium">
          Showing <strong className="text-slate-900 font-bold">{listings.length}</strong> of{" "}
          <strong className="text-slate-900 font-bold">{totalCount}</strong> listings
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
            <ArrowUpDown size={13} />
            <span>Sort:</span>
          </span>
          <SelectWithLabel
            value={sortBy}
            onValueChange={onSortChange}
            containerClassName="w-40 sm:w-44 gap-0"
            triggerClassName="h-9! px-3 rounded-[10px] border-slate-200 bg-slate-50 hover:bg-white text-xs font-semibold text-slate-800"
            options={[
              { value: "newest", label: "Newest First" },
              { value: "rating", label: "Highest Rated" },
              { value: "reviews", label: "Most Reviewed" },
              { value: "views", label: "Most Viewed" },
            ]}
          />
        </div>
      </div>

      {/* Listings Grid: Uses exact ListingCard from home page Recent Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {listings.map((item) => (
          <ListingCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pt-4 flex justify-center">
          <AppPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}
