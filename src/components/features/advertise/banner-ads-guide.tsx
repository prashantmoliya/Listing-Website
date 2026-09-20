"use client";

import { Layout, HelpCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

const placementDetails = [
  {
    name: "Header Banner",
    badge: "Most Visible",
    size: "728 × 90 px or 970 × 250 px",
    desc: "Fixed at the very top of every main page above the fold. First element visitors see when opening the directory.",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
  },
  {
    name: "Side Banner",
    badge: "High Engagement",
    size: "300 × 250 px / 300 × 600 px",
    desc: "Placed in the sticky sidebar alongside search results, category hubs, and verified business profiles.",
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    name: "Blog Page Banner",
    badge: "Editorial Match",
    size: "728 × 300 px (In-Content)",
    desc: "Embedded inside high-ranking informational blog posts and buying guides targeting purchase-ready customers.",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    name: "Footer Banner",
    badge: "Site-wide Anchor",
    size: "728 × 90 px",
    desc: "Displayed right above the footer across all portal pages for strong lingering brand recall.",
    color: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    name: "All in One Bundle",
    badge: "Best ROI",
    size: "Multi-slot synchronization",
    desc: "Combines Header, Sidebar, Blog, and Footer placements simultaneously for complete brand domination.",
    color: "bg-purple-50 border-purple-200 text-purple-700",
  },
];

export function BannerAdsGuide() {
  return (
    <div className="space-y-6">
      {/* Placements Specification Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
            <Layout size={19} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Ad Placements & Specs Guide
            </h3>
            <p className="text-xs text-slate-500">
              Recommended dimensions and layout positions
            </p>
          </div>
        </div>

        <div className="space-y-3.5">
          {placementDetails.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-bold text-slate-900 text-sm">
                  {item.name}
                </span>
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.color}`}
                >
                  {item.badge}
                </span>
              </div>
              <div className="text-xs font-semibold text-indigo-600 mb-1.5">
                Standard: {item.size}
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Contact Assistance */}
      <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white shadow-lg border border-indigo-800/30">
        <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle size={15} />
          <span>Need Instant Assistance?</span>
        </div>
        <h4 className="text-lg font-bold text-white mb-2">
          Speak with our Advertising Consultant
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          Have customized campaign duration, multi-city geotargeting, or bulk banner requirements? Our enterprise ad team is ready to help.
        </p>
        <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
          <Link
            href="mailto:advertise@indianlistingbucket.com"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium transition-colors text-center"
          >
            <Mail size={14} className="text-indigo-300 shrink-0" />
            <span>advertise@indianlistingbucket.com</span>
          </Link>
          <Link
            href="tel:+919876543210"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors text-center shadow-xs"
          >
            <Phone size={14} className="shrink-0" />
            <span>Call: +91 98765 43210</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
