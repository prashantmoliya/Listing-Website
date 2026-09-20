"use client";

import { LayoutGrid, Search, X } from "lucide-react";
import { Container } from "@/components/common";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CategoriesHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function CategoriesHero({
  searchQuery,
  onSearchChange,
}: CategoriesHeroProps) {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white py-14 sm:py-16 relative overflow-hidden text-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/20 blur-[100px] rounded-full" />
      </div>

      <Container className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-4 shadow-2xs">
          <LayoutGrid size={15} />
          <span>All Categories</span>
        </div>

        {/* Heading */}
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-3 tracking-tight text-white">
          Browse Business Categories in India
        </h1>

        {/* Subtitle */}
        <p className="text-indigo-100 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-normal">
          Discover thousands of verified local businesses across India, organised by 25+ business categories.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10"
          />
          <Input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-12 pl-11 pr-10 rounded-xl text-slate-800 text-sm sm:text-base font-medium shadow-xl border-0 bg-white placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-indigo-300 transition-all"
          />
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full size-7 p-0"
              aria-label="Clear search"
            >
              <X size={16} />
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
