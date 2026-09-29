"use client";

import Link from "next/link";
import { PlusCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardWelcomeBannerProps {
  userName?: string;
  totalViews?: number;
  newInquiries?: number;
}

export function DashboardWelcomeBanner({
  userName = "Rahul Sharma",
  totalViews = 4820,
  newInquiries = 14,
}: DashboardWelcomeBannerProps) {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-950 text-white relative overflow-hidden shadow-lg shadow-indigo-950/20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-sm text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
            <span>Verified Business Partner</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Hello, {userName} 👋
          </h2>
          <p className="text-sm text-indigo-200/90 leading-relaxed">
            Your listings gained{" "}
            <strong className="text-white">
              {totalViews.toLocaleString()} views
            </strong>{" "}
            and <strong className="text-white">{newInquiries} new inquiries</strong>{" "}
            this month. Keep your operating hours and photos updated for maximum visibility.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/dashboard/create-listing">
            <Button
              type="button"
              className="h-11 px-5 rounded-[10px] bg-white hover:bg-slate-100 text-indigo-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-indigo-600" />
              <span>Add New Listing</span>
            </Button>
          </Link>
          <Link href="/dashboard/my-listings">
            <Button
              type="button"
              variant="outline"
              className="h-11 px-4 rounded-[10px] bg-white/10 hover:bg-white/15 border-white/20 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              Manage Listings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
