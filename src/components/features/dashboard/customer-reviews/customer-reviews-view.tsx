"use client";

import { useState } from "react";
import {
  initialReceivedReviews,
  type ReceivedReviewItem,
} from "@/data";
import { CustomerReviewsStatsCard } from "./customer-reviews-stats-card";
import { CustomerReviewsList } from "./customer-reviews-list";

export function CustomerReviewsView() {
  const [receivedReviews] = useState<ReceivedReviewItem[]>(
    initialReceivedReviews
  );

  const avgRating = (
    receivedReviews.reduce((sum, r) => sum + r.rating, 0) /
    (receivedReviews.length || 1)
  ).toFixed(2);

  const fiveStarCount = receivedReviews.filter((r) => r.rating === 5).length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Customer Reviews
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Track verified customer reviews and ratings submitted on your registered businesses.
        </p>
      </div>

      {/* Stats Cards */}
      <CustomerReviewsStatsCard
        avgRating={parseFloat(avgRating)}
        totalReviews={receivedReviews.length}
        fiveStarCount={fiveStarCount}
      />

      {/* Received Reviews List (No reply, no tabs) */}
      <CustomerReviewsList reviews={receivedReviews} />
    </div>
  );
}
