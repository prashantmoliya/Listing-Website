"use client";

import { Star } from "lucide-react";

interface MyReviewsStatsProps {
  totalReviews: number;
  avgRating: string;
  fiveStarCount: number;
}

export function MyReviewsStatsCard({
  totalReviews,
  avgRating,
  fiveStarCount,
}: MyReviewsStatsProps) {
  const roundedRating = Math.round(parseFloat(avgRating) || 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* 1. Reviews Written */}
      <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Reviews Written
        </span>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-slate-900">
            {totalReviews}
          </span>
          <span className="text-xs text-slate-400">Total businesses reviewed</span>
        </div>
      </div>

      {/* 2. Average Rating Given */}
      <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Average Rating Given
        </span>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-slate-900">{avgRating}</span>
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < roundedRating
                    ? "fill-amber-400 text-amber-400"
                    : "text-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. 5-Star Reviews */}
      <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          5-Star Reviews
        </span>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-emerald-600">
            {fiveStarCount}
          </span>
          <span className="text-xs text-slate-400">Top rating reviews</span>
        </div>
      </div>
    </div>
  );
}
