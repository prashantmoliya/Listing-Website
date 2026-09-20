import { Button } from "@/components/ui/button";
import type { ListingItem } from "@/data";
import { LogIn, Star } from "lucide-react";
import Link from "next/link";

interface ListingReviewsProps {
  listing: ListingItem;
}

// Avatar background colors for colorful initial circles
const AVATAR_COLORS = [
  "bg-purple-600",
  "bg-indigo-600",
  "bg-blue-600",
  "bg-teal-600",
  "bg-emerald-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-cyan-600",
];

export function ListingReviews({ listing }: ListingReviewsProps) {
  const reviews = listing.reviews || [];
  const reviewsCount = reviews.length > 0 ? reviews.length : listing.reviewsCount;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
        <div>
          <h2 className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-2">
            <span>Customer Reviews</span>
            <span className="text-base text-slate-500 font-semibold">
              ({reviewsCount})
            </span>
          </h2>
        </div>

        {/* Rating summary */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="text-sm font-bold text-slate-900">
            {listing.rating.toFixed(1)} out of 5
          </span>
        </div>
      </div>

      {/* Login to Write Review Callout */}
      <div className="rounded-2xl p-4 sm:p-5 bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-slate-600 font-medium text-center sm:text-left">
          Have you used this business? Share your experience to help others.
        </p>
        <Link href="/login">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="rounded-[10px] text-xs font-bold text-indigo-600 border-indigo-200 hover:bg-indigo-50 shrink-0 cursor-pointer h-9 px-4"
          >
            <LogIn size={13} className="mr-1.5" />
            <span>Please login to write a review</span>
          </Button>
        </Link>
      </div>

      {/* Reviews List */}
      <div className="space-y-4 divide-y divide-slate-100">
        {reviews.map((rev, index) => {
          const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length];
          const initial = rev.name.charAt(0).toUpperCase();

          return (
            <div key={rev.id || index} className="pt-4 first:pt-0 space-y-2.5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* User Initial Avatar Circle */}
                  <div
                    className={`w-10 h-10 rounded-full ${avatarColor} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs`}
                  >
                    {initial}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {rev.name}
                    </h4>
                    <span className="text-xs text-slate-400 font-medium">
                      {rev.date}
                    </span>
                  </div>
                </div>

                {/* Review Stars */}
                <div className="flex items-center gap-0.5 shrink-0">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      className={
                        star <= rev.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-200 text-slate-200"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Comment */}
              <p className="text-sm text-slate-600 leading-relaxed font-normal pl-13">
                {rev.comment}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
