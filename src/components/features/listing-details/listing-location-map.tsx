import { MapPin, Navigation } from "lucide-react";
import type { ListingItem } from "@/data";
import Link from "next/link";

interface ListingLocationMapProps {
  listing: ListingItem;
}

export function ListingLocationMap({ listing }: ListingLocationMapProps) {
  // Generate encoded map query from address
  const mapQuery = encodeURIComponent(listing.address);
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-2">
          <MapPin size={22} className="text-indigo-600" />
          <span>Location</span>
        </h2>
      </div>

      <p className="text-sm sm:text-[15px] text-slate-600 font-medium">
        {listing.address}
      </p>

      {/* Map Embed Frame */}
      <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
        <iframe
          title={`Location of ${listing.name}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
          className="w-full h-full"
        />

        {/* Direction badge overlay */}
        <div className="absolute top-3 right-3 z-10">
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs text-xs font-bold text-slate-800 shadow-md hover:bg-white hover:text-indigo-600 transition-colors border border-slate-200/80"
          >
            <Navigation size={13} className="text-indigo-600" />
            <span>Get Directions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
