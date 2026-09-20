"use client";

import Link from "next/link";
import { Container } from "@/components/common";
import { marqueeCategories } from "@/data";

export default function MarqueeCategories() {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <Container>
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-5">
          Browse Popular Categories &amp; Cities
        </h2>

        {/* Marquee Container with Gradient Edge Fades */}
        <div className="relative flex overflow-x-hidden mb-6 py-2 group">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee-scroll group-hover:[animation-play-state:paused]">
            {[0, 1, 2].map((cycle) => (
              <div key={cycle} className="flex gap-3 px-1.5">
                {marqueeCategories.map(({ label, href }) => (
                  <Link
                    key={`${cycle}-${label}`}
                    href={href}
                    className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-700 hover:text-indigo-600 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 px-5 py-2.5 rounded-full transition-all shadow-xs hover:shadow-md"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-3 font-normal leading-relaxed">
          IndianListingBucket is India&apos;s premier{" "}
          <strong className="text-slate-700 font-bold">business listing website</strong> — one of the top{" "}
          <strong className="text-slate-700 font-bold">business listing sites in India</strong> covering 500+ cities and 25+ categories.
        </p>
      </Container>
    </section>
  );
}
