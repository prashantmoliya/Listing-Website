"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { 
  Briefcase, 
  Send, 
  Search, 
  X, 
  SearchX
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { ListingItem, ListingServiceProductItem } from "@/data";

interface ListingServicesProductsProps {
  listing: ListingItem;
  onInquire: (serviceName: string) => void;
}

function formatPrice(price?: number): string {
  if (price === undefined || price === null) return "Quote on Request";
  if (price === 0) return "Free";
  return `₹${price.toLocaleString("en-IN")}`;
}

export function ListingServicesProducts({
  listing,
  onInquire,
}: ListingServicesProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Normalize items from either rich servicesAndProducts or servicesOffered array
  const items: ListingServiceProductItem[] = useMemo(() => {
    if (listing.servicesAndProducts && listing.servicesAndProducts.length > 0) {
      return listing.servicesAndProducts;
    }

    if (listing.servicesOffered && listing.servicesOffered.length > 0) {
      return listing.servicesOffered.map((srv, idx) => ({
        id: `srv-${idx}`,
        name: srv,
        description: `Direct professional offering from ${listing.name}. Connect to discuss specifications, pricing, and availability.`,
        category: listing.category,
        image: listing.image || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
        popular: idx === 0,
      }));
    }

    return [];
  }, [listing]);

  // Dynamic category tabs extracted from available offerings
  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(items.map((i) => i.category).filter(Boolean))
    ) as string[];
    return cats.length > 1 ? ["All", ...cats] : [];
  }, [items]);

  // Filtered items based on active category and search query
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // 1. Category tab filter
      if (activeCategory !== "All" && item.category !== activeCategory) {
        return false;
      }

      // 2. Search filter
      const query = searchQuery.trim().toLowerCase();
      if (!query) return true;

      return (
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.category && item.category.toLowerCase().includes(query)) ||
        (item.price !== undefined && item.price.toString().includes(query))
      );
    });
  }, [items, activeCategory, searchQuery]);

  // If no services or products are configured, do not render the section
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-6">
      {/* Header (No background on icon, exactly matching Photo Gallery & Location) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
        <div className="space-y-1">
          <h2 className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-2">
            <Briefcase size={22} className="text-indigo-600" />
            <span>Services &amp; Products</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
            Directly listed by <span className="font-semibold text-slate-800">{listing.name}</span>. Click inquire on any offering to request pricing, schedules, or customized quotes.
          </p>
        </div>

        <Badge variant="muted" className="px-3 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 self-start sm:self-auto shrink-0">
          {items.length} {items.length === 1 ? "Offering" : "Offerings"}
        </Badge>
      </div>

      {/* Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 pt-1">
        {/* Dynamic Category Tabs using Tabs component with flex-wrap - No horizontal scrollbar */}
        {categories.length > 0 ? ( 
          <Tabs
            value={activeCategory}
            onValueChange={(val) => setActiveCategory(val as string)}
            className="w-full sm:w-auto"
          >
            <TabsList className="h-10 p-1 bg-slate-50/90 rounded-xl flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto border border-slate-200/70">
              {categories.map((cat) => { 
                const count =
                  cat === "All"
                    ? items.length
                    : items.filter((i) => i.category === cat).length;
                const isActive = activeCategory === cat;

                return (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className={cn(
                      "text-xs font-semibold px-3.5 py-1.5 rounded-[9px] transition-all flex items-center gap-2 cursor-pointer border whitespace-nowrap",
                      isActive
                        ? "bg-white text-indigo-600 shadow-xs border-slate-200/70 font-bold"
                        : "text-slate-500 hover:text-slate-800 hover:bg-white/60 border-transparent"
                    )}
                  >
                    <span>{cat}</span>
                    <span
                      className={cn(
                        "px-1.5 py-0.2 rounded-full text-[10px] font-bold transition-colors",
                        isActive
                          ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
                          : "bg-slate-200/60 text-slate-500"
                      )}
                    >
                      {count}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        ) : (
          <div />
        )}

        {/* Search Bar - Full width on mobile/tablet/laptop, compact on xl screens */}
        <div className="relative w-full xl:w-64 shrink-0">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search offerings..."
            className="pl-8.5 pr-8 h-10 text-xs rounded-xl bg-slate-50 border-slate-200 focus-visible:bg-white focus-visible:border-indigo-600 font-medium w-full"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-0.5"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Services & Products Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-indigo-300 hover:shadow-[0_8px_24px_rgba(79,70,229,0.08)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner (Clean image without service/product label overlay) */}
                {item.image && (
                  <div className="relative w-full h-44 sm:h-48 bg-slate-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-5 sm:p-5.5 space-y-2.5">
                  {item.category && (
                    <span className="inline-block text-[11px] font-bold text-indigo-600 bg-indigo-50/80 px-2.5 py-0.5 rounded-md border border-indigo-100">
                      {item.category}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-indigo-700 transition-colors tracking-tight leading-snug">
                    {item.name}
                  </h3>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Row: Price & Inquire Action */}
              <div className="px-5 pb-5 pt-3 sm:px-5.5 sm:pb-5.5 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Price / Quote
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {formatPrice(item.price)}
                  </span>
                </div>

                <Button
                  type="button"
                  onClick={() => onInquire(item.name)}
                  className="h-9 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0 transition-transform active:scale-95"
                >
                  <Send size={13} />
                  <span>Enquire Now</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty Search Results State */
        <div className="py-12 px-4 text-center rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <SearchX size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-800">No offerings found</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn&apos;t find any offerings matching &quot;{searchQuery}&quot;
              {activeCategory !== "All" && ` under ${activeCategory}`}.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="text-xs rounded-xl h-8 px-3 cursor-pointer"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
