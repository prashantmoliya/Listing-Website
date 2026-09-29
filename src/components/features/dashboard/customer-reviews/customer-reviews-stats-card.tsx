"use client";

import { Star } from "lucide-react";

interface ReviewsStatsCardsProps {
  avgRating?: number;
  totalReviews?: number;
  fiveStarCount?: number;
}

export function CustomerReviewsStatsCard({
  avgRating = 4.85,
  totalReviews = 4,
  fiveStarCount = 3,
}: ReviewsStatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Overall Average
        </span>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-slate-900">{avgRating}</span>
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
        </div>
      </div>

      <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Total Reviews
        </span>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-slate-900">
            {totalReviews}
          </span>
          <span className="text-xs text-slate-400">Verified customers</span>
        </div>
      </div>

      <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          5-Star Ratings
        </span>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-emerald-600">
            {fiveStarCount}
          </span>
          <span className="text-xs text-slate-400">Top customer ratings</span>
        </div>
      </div>
    </div>
  );
}

export const ReviewsStatsCards = CustomerReviewsStatsCard;
