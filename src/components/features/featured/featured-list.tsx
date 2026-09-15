"use client";

import { useState } from "react";
import { FeaturedListingCard, AppPagination } from "@/components/common";
import type { ListingItem } from "@/data";

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
      <AppPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
