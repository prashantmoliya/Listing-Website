"use client";

import { useState } from "react";
import { 
  Share2, 
  Check, 
  Send, 
  Sparkles, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ListingItem } from "@/data";

interface ListingDetailSidebarProps {
  listing: ListingItem;
  onOpenInquiry?: () => void;
}

export function ListingDetailSidebar({ listing, onOpenInquiry }: ListingDetailSidebarProps) {
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
      {/* 1. Service Partner Inquiry Card (ONLY for service partner listings) */}
      {listing.providesService && (
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-indigo-100 shadow-[0_4px_24px_rgba(79,70,229,0.08)] space-y-4">
          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              <Sparkles size={12} className="text-indigo-600" />
              <span>Service Partner</span>
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Direct Inquiry
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-bold text-lg text-slate-900 tracking-tight">
              Looking for Services?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Send your requirement directly to <span className="font-semibold text-slate-800">{listing.name}</span>. The business partner will contact you directly.
            </p>
          </div>

          {/* Quick list of top services if available */}
          {listing.servicesOffered && listing.servicesOffered.length > 0 && (
            <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 space-y-2">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Services Offered
              </p>
              <ul className="space-y-1.5">
                {listing.servicesOffered.map((srv) => (
                  <li key={srv} className="text-xs font-medium text-slate-700 flex items-center gap-2">
                    <Check size={14} className="text-primary shrink-0" />
                    <span className="">{srv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button
            type="button"
            onClick={onOpenInquiry}
            className="w-full h-10 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
          >
            <Send size={15} />
            <span>Send Inquiry</span>
          </Button>

          <div className="flex items-center justify-between text-[11px] text-slate-600 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-slate-400" />
              <span>Responds in ~24 hrs</span>
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={12} className="text-emerald-500" />
              <span>Verified Partner</span>
            </span>
          </div>
        </div>
      )}

      {/* 2. Share Listing Card */}
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
          className="w-full h-10 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
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


