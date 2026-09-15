import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export interface AppPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  getPageHref?: (page: number) => string;
  className?: string;
  showEdges?: boolean;
}

export function AppPagination({
  currentPage,
  totalPages,
  onPageChange,
  getPageHref,
  className,
  showEdges = true,
}: AppPaginationProps) {
  if (totalPages <= 0) return null;

  const handlePageClick = (e: React.MouseEvent, page: number) => {
    if (onPageChange) {
      e.preventDefault();
      onPageChange(page);
    }
  };

  // Helper to generate page item list with ellipses
  const getPageNumbers = () => {
    const pages: (number | "ellipsis-start" | "ellipsis-end")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("ellipsis-end");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("ellipsis-start");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis-start");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("ellipsis-end");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <Pagination className={cn("pt-8", className)}>
      <PaginationContent>
        {/* Previous Button */}
        {showEdges && (
          <PaginationItem>
            <PaginationPrevious
              href={getPageHref ? getPageHref(Math.max(1, currentPage - 1)) : "#"}
              onClick={(e) => handlePageClick(e, Math.max(1, currentPage - 1))}
              disabled={currentPage <= 1}
            />
          </PaginationItem>
        )}

        {/* Page Numbers */}
        {pages.map((page, idx) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          const isActive = currentPage === page;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={getPageHref ? getPageHref(page) : "#"}
                onClick={(e) => handlePageClick(e, page)}
                isActive={isActive}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next Button */}
        {showEdges && (
          <PaginationItem>
            <PaginationNext
              href={
                getPageHref
                  ? getPageHref(Math.min(totalPages, currentPage + 1))
                  : "#"
              }
              onClick={(e) => handlePageClick(e, Math.min(totalPages, currentPage + 1))}
              disabled={currentPage >= totalPages}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
