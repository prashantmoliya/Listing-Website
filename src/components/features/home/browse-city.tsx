"use client";

import Link from "next/link";
import { Container } from "@/components/common";
import { citiesList } from "@/data";

export default function BrowseCity() {
  return (
    <section className="py-20 bg-slate-50/70">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Browse by City
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Find businesses in your city
          </p>
        </div>

        {/* 24 Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-3.5">
          {citiesList.map((city) => (
            <Link
              key={city.slug}
              href={`/listings?city=${city.slug}`}
              className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
            >
              <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">
                {city.emoji}
              </span>
              <span className="text-sm font-semibold text-slate-800 line-clamp-1">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
