"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Star,
  ExternalLink,
  Trash2,
  MapPin,
  Building2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { type GivenReviewItem } from "@/data";

interface MyReviewsListProps {
  reviews: GivenReviewItem[];
  onDelete: (id: string) => void;
}

export function MyReviewsList({ reviews, onDelete }: MyReviewsListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = reviews.filter((r) => {
    const q = searchQuery.toLowerCase();
    return (
      r.businessName.toLowerCase().includes(q) ||
      r.businessCategory.toLowerCase().includes(q) ||
      r.businessCity.toLowerCase().includes(q) ||
      r.comment.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between gap-4 shadow-2xs">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by business name, city, or keyword..."
            className="w-full h-9 pl-9 pr-4 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
        <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
          Showing {filtered.length} of {reviews.length} reviews
        </span>
      </div>

      {/* Review Cards or Empty State */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            {reviews.length === 0
              ? "No reviews posted yet"
              : "No matching reviews"}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {reviews.length === 0
              ? "You haven't written any reviews for other listings yet. Share your experience to help others!"
              : "Try adjusting your search query to find the review you're looking for."}
          </p>
          {reviews.length === 0 && (
            <div className="pt-2">
              <Link href="/listings">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-[10px] text-xs font-semibold text-indigo-600 border-indigo-200 hover:bg-indigo-50 cursor-pointer"
                >
                  Browse Listings
                </Button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((review) => (
            <div
              key={review.id}
              className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-3.5 hover:shadow-sm transition-shadow"
            >
              {/* Header: Business info, Rating, Date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <h4 className="text-sm font-bold text-slate-900">
                      {review.businessName}
                    </h4>
                    <Link
                      href={`/listings/${review.businessSlug}`}
                      target="_blank"
                      className="text-slate-400 hover:text-indigo-600 transition-colors"
                      title="Open Public Listing"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                    <span className="font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md text-[10px]">
                      {review.businessCategory}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      {review.businessCity}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
              </div>

              {/* Review Comment */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-slate-50/60 p-3.5 rounded-xl border border-slate-100">
                &ldquo;{review.comment}&rdquo;
              </p>

              {/* Actions Footer */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  Public Verified Review
                </span>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/listings/${review.businessSlug}`}
                    target="_blank"
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2.5 rounded-[8px] text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      View Listing
                    </Button>
                  </Link>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(review.id)}
                    className="h-8 px-2.5 rounded-[8px] text-rose-500 hover:text-rose-700 hover:bg-rose-50 text-xs font-semibold cursor-pointer flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
