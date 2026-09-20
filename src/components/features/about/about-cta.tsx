"use client";

import Link from "next/link";
import { Container } from "@/components/common";

export function AboutCta() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 md:py-20 text-center text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400/20 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Ready to list your business?
        </h2>

        <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          Join thousands of businesses already on IndianListingBucket. It&apos;s free to get started.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/listings/create"
            className="border-2 border-white bg-white text-primary hover:bg-slate-50 font-bold px-8 py-3 rounded-[10px] shadow-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            <span>Get Listed Free</span>
          </Link>
          <Link
            href="/listings"
            className="border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-[10px] transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            <span>Browse Listings</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
