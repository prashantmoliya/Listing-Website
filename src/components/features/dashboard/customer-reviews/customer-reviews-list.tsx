"use client";

import { useState } from "react";
import { Star, Filter, MessageSquare } from "lucide-react";
import { type ReceivedReviewItem } from "@/data";

interface CustomerReviewsListProps {
  reviews: ReceivedReviewItem[];
}

export function CustomerReviewsList({ reviews }: CustomerReviewsListProps) {
  const [selectedListingFilter, setSelectedListingFilter] = useState("all");

  const filtered = reviews.filter((r) => {
    if (selectedListingFilter === "all") return true;
    return r.listingId === selectedListingFilter;
  });

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <Filter className="w-4 h-4 text-slate-400" />
          <span>Filter by Business:</span>
        </div>
        <select
          value={selectedListingFilter}
          onChange={(e) => setSelectedListingFilter(e.target.value)}
          className="h-9 px-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer"
        >
          <option value="all">All My Businesses ({reviews.length})</option>
          <option value="lst-1">Royal Palace Heritage Hotel & Resort</option>
          <option value="lst-2">Apex Multi-Speciality Clinic</option>
          <option value="lst-3">Saffron Spices Fine Dining</option>
        </select>
      </div>

      {/* Reviews List */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            No reviews found
          </h3>
          <p className="text-xs text-slate-500">
            No customer reviews match the selected filter.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((review) => (
            <div
              key={review.id}
              className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-3.5 hover:shadow-sm transition-shadow"
            >
              {/* Header: User, Business Badge, Rating, Date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {review.author}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                        {review.listingName}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-center">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
              </div>

              {/* Comment */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                &ldquo;{review.comment}&rdquo;
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
