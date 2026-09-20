"use client";

import Link from "next/link";
import { SearchX } from "lucide-react";
import type { CategoryItem } from "@/data";
import { Button } from "@/components/ui/button";

interface CategoriesGridProps {
  categories: CategoryItem[];
  totalCount: number;
  searchQuery: string;
  onClearSearch: () => void;
}

export function CategoriesGrid({
  categories,
  totalCount,
  searchQuery,
  onClearSearch,
}: CategoriesGridProps) {
  if (categories.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] my-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
          <SearchX size={32} />
        </div>
        <h3 className="font-extrabold text-xl sm:text-2xl text-slate-800 mb-2">
          No categories found
        </h3>
        <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
          We couldn&apos;t find any category matching &ldquo;{searchQuery}&rdquo;. Try another keyword.
        </p>
        <Button
          type="button"
          size="lg"
          onClick={onClearSearch}
          className="px-6 py-2.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm h-11" 
        >
          Show All Categories
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Category count indicator */}
      <p className="text-sm text-slate-500">
        Showing <strong className="text-slate-900 font-bold">{categories.length}</strong> of{" "}
        <strong className="text-slate-900 font-bold">{totalCount}</strong> categories
      </p>

      {/* Categories Grid — using homepage browse-category card UI */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3.5 md:gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/listings?category=${cat.slug}`}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
          >
            <span className="text-3xl sm:text-4xl mb-2.5 group-hover:scale-110 transition-transform">
              {cat.icon}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors text-center leading-tight line-clamp-2">
              {cat.name}
            </p>
            {cat.count && (
              <span className="mt-1.5 text-[11px] font-medium text-slate-400 group-hover:text-indigo-500 transition-colors">
                {cat.count} listings
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
