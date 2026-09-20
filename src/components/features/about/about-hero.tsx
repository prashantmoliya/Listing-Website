"use client";

import { Users } from "lucide-react";
import { Container } from "@/components/common";

export function AboutHero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 md:py-28 text-white relative overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400/20 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-xs">
          <Users size={16} />
          <span>About Us</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
          India&apos;s #1 Free{" "}
          <span className="block text-yellow-300">Business Listing Website</span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          IndianListingBucket connects millions of customers with the best local
          businesses across every corner of India.
        </p>
      </Container>
    </section>
  );
}
