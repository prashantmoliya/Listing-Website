"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { Container } from "@/components/common";

export function FeaturedBottomCta() {
  return (
    <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 py-16 md:py-20 text-center text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-300/20 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Want your business here?
        </h2>

        <p className="text-white/95 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Featured listings get up to{" "}
          <span className="text-yellow-300 font-bold underline decoration-yellow-300/60 underline-offset-4">
            5x more views
          </span>
          , appear on top of search results, and build instant trust with customers.
        </p>

        <div className="flex items-center justify-center pt-2">
          <Link
            href="/advertise"
            className="border-2 border-white bg-white text-orange-600 hover:bg-slate-50 font-bold px-8 py-3 rounded-[10px] shadow-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Star size={18} className="fill-orange-500 text-orange-500" />
            <span>View Advertising Packages</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
