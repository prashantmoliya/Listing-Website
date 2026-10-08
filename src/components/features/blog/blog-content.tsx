"use client";

import { useState, useMemo } from "react";
import { BookOpen, RotateCcw } from "lucide-react";
import { Container } from "@/components/common";
import { AppPagination } from "@/components/common/app-pagination";
import { Button } from "@/components/ui/button";
import {
  blogPosts,
  blogCategories,
} from "@/data";
import { BlogHero } from "./blog-hero";
import { BlogCategories } from "./blog-categories";
import { BlogFeaturedCard } from "./blog-featured-card";
import { BlogCard } from "./blog-card";

const POSTS_PER_PAGE = 6;

export function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Category filter
      if (activeCategory !== "all" && post.categorySlug !== activeCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchesTag = post.tags.some((t) => t.toLowerCase().includes(query));
        const matchesCategory = post.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesExcerpt && !matchesTag && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, activeCategory]);

  // Featured post (only on default "All" category view without search)
  const featuredPost = useMemo(() => {
    if (activeCategory === "all" && !searchQuery.trim()) {
      return blogPosts.find((p) => p.featured) || blogPosts[0];
    }
    return null;
  }, [activeCategory, searchQuery]);

  // Exclude featured post from grid only on default view so it isn't duplicated
  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p.id !== featuredPost.id);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  // Pagination calculation
  const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return gridPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [gridPosts, currentPage]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setCurrentPage(1);
  };

  const handleCategorySelect = (slug: string) => {
    setActiveCategory(slug);
    setCurrentPage(1);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Hero Header with Search */}
      <BlogHero
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
        onSearchClear={() => setSearchQuery("")}
      />

      {/* 2. Main Content Body */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="space-y-8 sm:space-y-10">
            
            {/* Category Filter Pills Bar */}
            <div className="border-b border-slate-100 pb-5">
              <BlogCategories
                categories={blogCategories}
                activeCategory={activeCategory}
                onSelectCategory={handleCategorySelect}
              />
            </div>

            {/* Featured Post Banner (full width) */}
            {featuredPost && (
              <div className="pt-2">
                <BlogFeaturedCard post={featuredPost} />
              </div>
            )}

            {/* 3-Column Blog Cards Grid (Full Width) */}
            <div>
              {paginatedPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {paginatedPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="pt-10 mt-10 border-t border-slate-100 flex justify-center">
                      <AppPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                      />
                    </div>
                  )}
                </>
              ) : (
                /* Empty state */
                <div className="bg-slate-50 rounded-3xl p-10 sm:p-14 text-center border border-slate-200/80 space-y-4 mx-auto">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    No Articles Found
                  </h3>
                  <p className="text-slate-500 text-sm">
                    We couldn&apos;t find any articles matching your search or filters. Try searching for different keywords or clear your active filters.
                  </p>
                  <div className="pt-2">
                    <Button
                      variant="default"
                      onClick={handleResetFilters}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      <span>Reset All Filters</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
