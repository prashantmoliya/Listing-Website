"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/common";

export function ContactCards() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10">
      <Container className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: Email Us */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform">
              <Mail size={26} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                EMAIL US
              </span>
              <Link
                href="mailto:info@indianlistingbucket.com"
                className="text-slate-900 font-bold text-base sm:text-[1.05rem] hover:text-indigo-600 transition-colors block"
              >
                info@indianlistingbucket.com
              </Link>
              <p className="text-slate-500 text-xs mt-1 font-medium">
                We reply within 24 hours
              </p>
            </div>
          </div>

          {/* Card 2: Our Office */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100/80 flex items-center justify-center text-amber-500 shrink-0 group-hover:scale-110 transition-transform">
              <MapPin size={26} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                OUR OFFICE
              </span>
              <a
                href="https://maps.google.com/?q=Indore,India"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 font-bold text-base sm:text-[1.05rem] hover:text-amber-600 transition-colors block"
              >
                Indore, Madhya Pradesh
              </a>
              <p className="text-slate-500 text-xs mt-1 font-medium">
                India 452001
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
