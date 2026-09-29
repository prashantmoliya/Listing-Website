"use client";

import Link from "next/link";
import { Eye, Star, Edit, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { initialUserListings, type UserListingItem } from "@/data";

interface DashboardListingsPreviewProps {
  listings?: UserListingItem[];
}

export function DashboardListingsPreview({
  listings = initialUserListings,
}: DashboardListingsPreviewProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            My Registered Listings
          </h3>
          <p className="text-xs text-slate-400">
            Businesses currently attached to your account
          </p>
        </div>
        <Link
          href="/dashboard/my-listings"
          className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group"
        >
          <span>View All ({listings.length})</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
        <div className="divide-y divide-slate-100">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-100"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {listing.name}
                    </h4>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                        listing.status === "Approved"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : listing.status === "Pending"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-rose-50 text-rose-700 border border-rose-200"
                      }`}
                    >
                      {listing.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">
                    {listing.category} • {listing.city}
                  </p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <strong className="text-slate-600">
                        {listing.views}
                      </strong>{" "}
                      views
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      {listing.rating} ({listing.reviewsCount})
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <Link href={`/dashboard/edit-listing/${listing.id}`}>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 rounded-[8px] text-xs font-semibold text-slate-700 hover:text-slate-900 border-slate-200 cursor-pointer flex items-center gap-1.5"
                  >
                    <Edit className="w-3.5 h-3.5 text-slate-500" />
                    <span>Edit</span>
                  </Button>
                </Link>
                <Link href="/listings" target="_blank">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2.5 rounded-[8px] text-slate-500 hover:text-slate-900 cursor-pointer"
                    title="View Public Profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
