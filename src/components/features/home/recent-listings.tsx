"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, ListingCard } from "@/components/common";
import { recentListings } from "@/data";

export default function RecentListings() {
  return (
    <section className="py-20 bg-slate-50/60 border-t border-slate-100">
      <Container className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
              Recent Listings
            </h2>
            <p className="text-slate-500 text-base">
              Newly added businesses on our platform
            </p>
          </div>

          <Link
            href="/listings"
            className="hidden lg:flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold text-sm px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <span>Browse All Listings</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentListings.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] border-2 border-indigo-200 bg-white text-indigo-600 font-bold text-sm"
          >
            <span>Browse All Listings</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
