"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Crown,
  MapPin,
  Phone,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ListingItem } from "@/data";

export interface FeaturedListingCardProps {
  item: ListingItem;
  className?: string;
}

export function FeaturedListingCard({ item, className }: FeaturedListingCardProps) {
  return (
    <div
      key={item.id}
      className={cn(
        "bg-white rounded-xl border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group",
        className
      )}
    >
      {/* Image */}
      <div className="sm:w-64 h-52 sm:h-auto min-h-[200px] relative overflow-hidden bg-slate-100 shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, 256px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5">
          {item.verified && (
            <Badge variant="emerald" className="bg-emerald-500 hover:bg-emerald-500 text-white border-0 text-xs font-bold flex items-center gap-1 shadow-sm rounded-full px-2.5 py-1">
              <ShieldCheck size={14} className="size-3.75!" /> Verified
            </Badge>
          )}
          {item.featured && (
            <Badge className="bg-amber-400 hover:bg-amber-400 text-slate-950 border-0 text-xs font-bold flex items-center gap-1 shadow-sm rounded-full px-2.5 py-1">
              <Crown size={14} className="fill-slate-950 text-slate-950" /> Featured
            </Badge>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="indigo" className="font-bold px-2.5 py-0.5 rounded-full">
                {item.category}
              </Badge>
              <Badge variant="muted" className="gap-1 font-medium text-slate-500 border border-slate-100 rounded-md py-0.5 text-[11px]">
                <Eye size={12} className="text-slate-400" />
                <span>{(item.views || 350).toLocaleString()} views</span>
              </Badge>
            </div>
            <div className="flex items-center gap-1 text-amber-500 font-black text-xs sm:text-sm">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span>{item.rating.toFixed(1)}</span>
              <span className="text-slate-400 font-normal">({item.reviewsCount})</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            <Link href={`/listings/${item.slug}`}>
              {item.name}
            </Link>
          </h3>

          <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 mt-1.5 leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-2">
            <MapPin size={14} className="text-primary shrink-0" />
            <span>{item.address}, {item.city}</span>
          </div>
        </div>

        {/* Bottom Tags & Contact */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {item.tags?.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="text-[11px] font-semibold text-slate-600 bg-slate-100 border-0 rounded-md px-2 py-0.5 hover:bg-slate-200/70 cursor-pointer"
              >
                #{t}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`tel:${item.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors"
            >
              <Phone size={12} />
              <span>Call</span>
            </Link>
            <Link
              href={`/listings/${item.slug}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[10px] border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
            >
              <span>Details</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
