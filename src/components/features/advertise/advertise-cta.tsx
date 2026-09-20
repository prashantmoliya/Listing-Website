"use client";

import Link from "next/link";
import { Container } from "@/components/common";
import { Plus } from "lucide-react";

export function AdvertiseCta() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 md:py-20 text-center text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400/20 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Ready to grow your business?
        </h2>

        <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          Start with a free listing today, or jump straight into a featured plan
          to maximise your visibility.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/listings/create"
            className="border-2 border-white bg-white text-primary hover:bg-slate-50 font-bold px-8 py-3 rounded-[10px] shadow-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center flex justify-center items-center gap-1.5"
          >
            <Plus size={18} className="-ml-4" />
            <span>Add Free Listing</span>
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-[10px] transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            <span>Talk to Our Team</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
