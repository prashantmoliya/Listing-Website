"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ListingItem } from "@/data";
import {
  Calendar,
  Check,
  Clock,
  Crown,
  Eye,
  MapPin,
  Share2,
  ShieldCheck,
  Star
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ListingDetailHeaderProps {
  listing: ListingItem;
}

export function ListingDetailHeader({ listing }: ListingDetailHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: listing.name,
          text: `Check out ${listing.name} on IndianListingBucket!`,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
        {/* Business Image in Square - Full Cover */}
        <div className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 aspect-square rounded-2xl bg-slate-100 border border-slate-200 shrink-0 relative overflow-hidden shadow-sm">
          <Image
            src={listing.image || listing.logo || "/placeholder.jpg"}
            alt={listing.name}
            fill
            sizes="(max-width: 640px) 192px, 224px"
            className="object-cover"
            priority
          />
        </div>

        {/* Content Details */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5 space-y-3.5">
          {/* Top info block */}
          <div className="space-y-3">
            {/* Title & Quick Share */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {listing.name}
              </h1>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleShare}
                title="Share listing"
                className="rounded-xl border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 shrink-0 cursor-pointer"
              >
                {copied ? <Check size={16} className="text-emerald-600" /> : <Share2 size={16} />}
              </Button>
            </div>

            {/* Badges: Category, Verified, Featured, New (Same style as listing card) */}
            <div className="flex flex-wrap items-center gap-2">
              <Link href={`/listings?category=${listing.categorySlug}`}>
                <Badge variant="indigo" className="font-bold px-2.5 py-1 rounded-full text-xs hover:bg-indigo-100 transition-colors cursor-pointer">
                  {listing.category}
                </Badge>
              </Link>
              {listing.verified && (
                <Badge variant="emerald" className="bg-emerald-500 hover:bg-emerald-500 text-white border-0 text-xs font-bold flex items-center gap-1 shadow-sm rounded-full px-2.5 py-1">
                  <ShieldCheck size={14} /> <span>Verified</span>
                </Badge>
              )}
              {listing.featured && (
                <Badge className="bg-amber-400 hover:bg-amber-400 text-slate-950 border-0 text-xs font-bold flex items-center gap-1 shadow-sm rounded-full px-2.5 py-1">
                  <Crown size={14} className="fill-slate-950 text-slate-950" /> <span>Featured</span>
                </Badge>
              )}
              {listing.isNew && (
                <Badge variant="outline" className="bg-white/95 backdrop-blur-xs text-xs font-bold text-slate-800 shadow-xs flex items-center gap-1 rounded-full px-2.5 py-1 border-slate-200">
                  <Clock size={12} className="text-indigo-600" />
                  <span>New</span>
                </Badge>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 pt-0.5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={
                      star <= Math.floor(listing.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-200 text-slate-200"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-900">
                {listing.rating.toFixed(1)}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                ({listing.reviewsCount} reviews)
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 font-medium">
              <MapPin size={16} className="text-indigo-600 shrink-0 mt-0.5" />
              <span>{listing.address}</span>
            </div>
          </div>

          {/* Views & Listed Date */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 font-medium border-t border-slate-100">
            <span className="flex items-center gap-1.5">
              <Eye size={14} className="text-slate-400" />
              <span>{listing.views || 273} views</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-slate-400" />
              <span>Listed {listing.listedDate || "28/5/2026"}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
