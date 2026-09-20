"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common";
import { categoriesList } from "@/data";

export default function BrowseCategory() {
  return (
    <section className="py-20 bg-slate-50/70">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Browse by Category
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Find businesses in your industry
          </p>
        </div>

        {/* 32 Categories Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3.5 md:gap-4">
          {categoriesList.map((cat) => (
            <Link
              key={cat.slug}
              href={`/listings?category=${cat.slug}`}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
            >
              <span className="text-3xl sm:text-4xl mb-2.5 group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 text-center leading-tight line-clamp-2">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] border-2 border-indigo-200 bg-white text-indigo-600 hover:border-indigo-400 hover:bg-slate-50 font-bold text-sm transition-all shadow-xs"
          >
            <span>View All Categories</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
