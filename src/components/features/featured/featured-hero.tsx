"use client";

import Link from "next/link";
import { Star, Crown } from "lucide-react";
import { Container, AppBreadcrumb } from "@/components/common";

interface FeaturedHeroProps {
  totalCount: number;
}

export function FeaturedHero({ totalCount }: FeaturedHeroProps) {
  return (
    <section className="pt-8 pb-6 bg-white border-b border-slate-100">
      <Container>
        {/* Breadcrumb */}
        <AppBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Featured Listings" },
          ]}
          className="mb-6"
        />

        {/* Title & Action Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-500 shrink-0 shadow-xs">
              <Crown size={24} className="text-amber-500" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Featured Businesses
              </h1>
              <p className="text-slate-500 text-sm font-medium mt-0.5">
                {totalCount} premium businesses found
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/advertise"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-amber-100/80 hover:bg-amber-200/80 text-amber-900 font-bold text-sm border border-amber-200/80 transition-all hover:shadow-xs"
            >
              <Star size={16} className="fill-amber-500 text-amber-500" />
              <span>Get Featured</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
