"use client";

import { Eye, Target, TrendingUp, Zap, ShieldCheck } from "lucide-react";

const whyFeatures = [
  {
    icon: Eye,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
    title: "High-Traffic Impressions",
    desc: "Reach 50,000+ verified monthly local buyers, entrepreneurs, and service seekers looking for trusted businesses.",
  },
  {
    icon: Target,
    iconBg: "bg-indigo-50 border-indigo-100 text-indigo-600",
    title: "Category & City Targeting",
    desc: "Target your banners specifically by Indian state, city, or niche category so your ads reach the highest-intent customers.",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
    title: "Real-Time CTR Analytics",
    desc: "Get transparent insights on total ad impressions, click-through rates (CTR), and lead conversions during your campaign.",
  },
  {
    icon: Zap,
    iconBg: "bg-amber-50 border-amber-100 text-amber-600",
    title: "Fast Turnaround & Support",
    desc: "Your banner goes live within 24 hours of creative approval. Complimentary banner resizing and design guidance included.",
  },
];

export function BannerAdsWhy() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
          <ShieldCheck size={22} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Why Banner Ads on IndianListingBucket?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Boost brand credibility and direct traffic with strategic display advertising
          </p>
        </div>
      </div>

      {/* 2x2 Feature Grid with Perfect Font Sizes & Readability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {whyFeatures.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.title}
              className="p-4 sm:p-5 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-3.5 ${feat.iconBg}`}
                >
                  <Icon size={18} />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
