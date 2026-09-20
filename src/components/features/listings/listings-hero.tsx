"use client";

import { Search, MapPin, ArrowRight } from "lucide-react";
import { Container, AppBreadcrumb } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ListingsHeroProps {
  keyword: string;
  city: string;
  categoryName?: string;
  cityName?: string;
  onKeywordChange: (val: string) => void;
  onCityChange: (val: string) => void;
  onSearchSubmit: () => void;
}

export function ListingsHero({
  keyword,
  city,
  categoryName,
  cityName,
  onKeywordChange,
  onCityChange,
  onSearchSubmit,
}: ListingsHeroProps) {
  const activeCity = cityName || city;

  // Compute dynamic H1 heading based on live filters
  const pageTitle = keyword
    ? `"${keyword}" — Search Results`
    : categoryName
    ? `${categoryName} Business Listings in India`
    : activeCity
    ? `Business Listings in ${activeCity}`
    : "Business Listings in India — Free Local Business Directory";

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Listings", href: categoryName || activeCity || keyword ? "/listings" : undefined },
    ...(categoryName ? [{ label: categoryName }] : []),
    ...(activeCity ? [{ label: activeCity }] : []),
    ...(keyword ? [{ label: `"${keyword}"` }] : []),
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchSubmit();
    }
  };

  return (
    <section className="bg-gradient-to-b from-indigo-50/70 via-indigo-50/30 to-white border-b border-slate-200/80 py-8 sm:py-10">
      <Container className="max-w-4xl text-center">
        {/* Breadcrumbs */}
        <div className="inline-block bg-white px-4 py-1.5 rounded-full border border-slate-200/80 shadow-2xs mb-4">
          <AppBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Dynamic Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
          {pageTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mb-7 leading-relaxed">
          Discover verified local businesses, ratings, customer reviews, and direct contact details across India.
        </p>

        {/* Search & Location Bar */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row items-center gap-2 max-w-3xl mx-auto">
          {/* Keyword input */}
          <div className="relative flex-1 w-full">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <Input
              type="text"
              placeholder="Search by business name, services, or keywords..."
              value={keyword}
              onChange={(e) => onKeywordChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-11 pl-10 pr-3 rounded-xl border-0 shadow-none bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400 focus-visible:ring-0"
            />
          </div>

          <div className="hidden sm:block w-px h-7 bg-slate-200" />

          {/* City input */}
          <div className="relative w-full sm:w-55">
            <MapPin
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <Input
              type="text"
              placeholder="City..."
              value={city}
              onChange={(e) => onCityChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-11 pl-10 pr-3 rounded-xl border-0 shadow-none bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400 focus-visible:ring-0"
            />
          </div>

          {/* Search Button */}
          <Button
            type="button"
            onClick={onSearchSubmit}
            className="w-full sm:w-auto h-11 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 shrink-0"
          >
            <span>Search</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
