"use client";

import Link from "next/link";
import {
  Crown,
  ChevronRight,
  ArrowRight,
  Tag,
} from "lucide-react";
import { Container, FeaturedListingCard } from "@/components/common";
import { Badge } from "@/components/ui/badge";
import { featuredListings, popularTags } from "@/data";

export default function FeaturedListings() {
  return (
    <section className="py-20 overflow-hidden bg-white">
      {/* Header */}
      <Container className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Crown size={18} className="text-amber-500" />
              <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">
                Premium
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
              Featured Listings
            </h2>
            <p className="text-slate-500 text-base">
              Verified and promoted by business owners
            </p>
          </div>

          <Link
            href="/featured"
            className="hidden lg:flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold text-sm px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <span>View All</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </Container>

      {/* Content Layout: 70% Wide Cards + 30% Sticky Tags Sidebar */}
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column: Wide Listing Cards */}
          <div className="w-full lg:w-[70%] space-y-5">
            {featuredListings.map((item) => (
              <FeaturedListingCard key={item.id} item={item} />
            ))}

            <div className="text-center pt-4">
              <Link
                href="/featured"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] border-2 border-indigo-200 bg-white text-indigo-600 hover:border-indigo-400 hover:bg-slate-50 font-bold text-sm transition-all"
              >
                <span>Show More Featured Listings</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Popular Tags Sidebar */}
          <div className="w-full lg:w-[30%] hidden lg:block">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-base">
                <Tag size={18} className="text-indigo-600" />
                <span>Popular Tags</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/listings?q=${encodeURIComponent(tag.name)}`}
                  >
                    <Badge
                      variant="outline"
                      className="px-3 py-1.5 bg-white border-slate-200 text-slate-700 text-xs font-medium rounded-full hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors shadow-2xs cursor-pointer"
                    >
                      {tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
