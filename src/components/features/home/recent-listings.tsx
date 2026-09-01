"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Star, 
  MapPin, 
  Phone,
  Clock
} from "lucide-react";
import { Container } from "@/components/common";
import { recentListings } from "@/data";

export default function RecentListings() {
  return (
    <section className="py-20 bg-slate-50/60 border-t border-slate-100">
      <Container className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
              Recent Listings
            </h2>
            <p className="text-slate-500 text-base">
              Newly added businesses on our platform
            </p>
          </div>

          <Link
            href="/listings"
            className="hidden sm:inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold text-sm"
          >
            <span>Browse All Listings</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentListings.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-xs flex items-center gap-1">
                    <Clock size={12} className="text-indigo-600" />
                    <span>New</span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span>{item.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    <Link href={`/listings/${item.slug}`}>
                      {item.name}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-1">
                    <MapPin size={13} className="text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{item.address}, {item.city}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-2 mt-2">
                <a
                  href={`tel:${item.phone.replace(/\s+/g, "")}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[10px] bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-colors"
                >
                  <Phone size={12} />
                  <span>Call</span>
                </a>
                <Link
                  href={`/listings/${item.slug}`}
                  className="inline-flex items-center justify-center py-2 px-3 rounded-[10px] border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
                >
                  <span>View</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] border-2 border-indigo-200 bg-white text-indigo-600 font-bold text-sm"
          >
            <span>Browse All Listings</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
