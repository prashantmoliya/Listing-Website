import { Badge } from "@/components/ui/badge";
import type { ListingItem } from "@/data";
import { Hash, Tags } from "lucide-react";

interface ListingTagsProps {
  listing: ListingItem;
}

export function ListingTags({ listing }: ListingTagsProps) {
  const tags = listing.tags && listing.tags.length > 0 
    ? listing.tags  
    : [listing.category, listing.city].filter(Boolean);

  if (!tags || tags.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-4">
      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-2">
        <Tags size={22} className="text-indigo-600" />
        <span>Tags &amp; Keywords</span>
      </h2>

      <div className="flex flex-wrap gap-2 pt-1">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="muted"
            className="px-3 py-1.25 rounded-xl bg-slate-100/90 text-slate-500 border border-slate-200/80 text-xs sm:text-sm font-medium gap-0.5 shadow-none hover:bg-slate-100/90"
          >
            <Hash size={13} />
            <span>{tag}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
