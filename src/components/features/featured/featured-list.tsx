"use client";

import { useState } from "react";
import { FeaturedListingCard } from "@/components/common";
import type { ListingItem } from "@/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedListProps {
  items: ListingItem[];
}

const ITEMS_PER_PAGE = 6;

export function FeaturedList({ items }: FeaturedListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE) || 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-8">
      {/* List */}
      <div className="space-y-5">
        {currentItems.map((item) => (
          <FeaturedListingCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="p-2 rounded-xl border border-border bg-card text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                currentPage === page
                  ? "bg-primary text-primary-foreground shadow-md shadow-indigo-500/20"
                  : "bg-card border border-border text-foreground hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="p-2 rounded-xl border border-border bg-card text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
