"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ListingItem } from "@/data";

interface ListingDetailSidebarProps {
  listing: ListingItem;
}

export function ListingDetailSidebar({ listing }: ListingDetailSidebarProps) {
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
    <aside className="w-full space-y-6">
      {/* 1. Share Listing Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-4">
        <h3 className="font-bold text-lg text-slate-900 tracking-tight">
          Share Listing
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          Share this business profile with your friends and network.
        </p>
        <Button
          type="button"
          onClick={handleShare}
          className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          {copied ? (
            <>
              <Check size={16} className="text-emerald-300" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 size={16} />
              <span>Share Now</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  );
}


