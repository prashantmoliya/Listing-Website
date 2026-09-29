"use client";

import Link from "next/link";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { initialReceivedReviews, type ReceivedReviewItem } from "@/data";

interface DashboardReviewsPreviewProps {
  reviews?: ReceivedReviewItem[];
}

export function DashboardReviewsPreview({
  reviews = initialReceivedReviews.slice(0, 3),
}: DashboardReviewsPreviewProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Recent Reviews Received
          </h3>
          <p className="text-xs text-slate-400">
            Customer feedback on your listings
          </p>
        </div>
        <Link
          href="/dashboard/customer-reviews"
          className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 space-y-4 shadow-2xs">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 space-y-2 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
                  {review.author[0]}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">
                    {review.author}
                  </h5>
                  <span className="text-[10px] text-slate-400">
                    {review.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-2">
              &ldquo;{review.comment}&rdquo;
            </p>

            <div className="pt-1 flex items-center justify-between text-[11px] border-t border-slate-200/50">
              <span className="text-slate-400 truncate max-w-[140px]">
                {review.listingName}
              </span>
              <span className="text-emerald-600 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verified Review
              </span>
            </div>
          </div>
        ))}

        <Link href="/dashboard/customer-reviews" className="block text-center pt-1">
          <Button
            type="button"
            variant="outline"
            className="w-full h-9 rounded-[8px] border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            Go to Reviews Management
          </Button>
        </Link>
      </div>
    </div>
  );
}
