"use client";

import { Container } from "@/components/common";
import { Eye, Megaphone, Target, Users } from "lucide-react";
import Link from "next/link";

export function AdvertiseHero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 md:py-24 text-white relative overflow-hidden text-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400/20 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-xs">
          <Megaphone size={16} />
          <span>Advertising &amp; Sponsorship</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
          Reach Thousands of{" "}
          <span className="block text-yellow-300">Local Customers</span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-8">
          Grow your business with powerful advertising programs. Target your
          audience locally and turn visitors into paying customers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#packages"
            className="border-2 border-white bg-white text-primary hover:bg-slate-50 font-bold px-8 py-3 rounded-[10px] shadow-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            <span>View Packages</span>
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-[10px] transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            <span>Talk to Our Team</span>
          </Link>
        </div>

        {/* 3 Metric Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <Users size={20} className="text-white" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white">1K+ Visitors</div>
              <div className="text-xs text-white/80 font-medium">Every month</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-400/30 flex items-center justify-center shrink-0">
              <Eye size={20} className="text-amber-300" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white">Featured Placement</div>
              <div className="text-xs text-amber-200 font-medium">Maximum Visibility (+145% Views)</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/30 flex items-center justify-center shrink-0">
              <Target size={20} className="text-emerald-300" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white">Laser Targeted</div>
              <div className="text-xs text-emerald-200 font-medium">City &amp; Category Wise</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
