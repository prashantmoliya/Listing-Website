"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  Star, 
  Building, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";
import { Container } from "@/components/common";
import { popularSearches } from "@/data";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden border-b border-slate-100 py-16 md:py-20 lg:py-24">
      {/* Background Radial Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Description, Search, Popular Tags */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:max-w-none lg:mx-0 pr-0 lg:pr-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-black text-slate-900 mb-6 leading-[1.14] tracking-tight">
              Discover &amp; Connect with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
                Local Businesses
              </span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Explore verified restaurants, doctors, services, and local businesses across 500+ Indian cities. Everything you need, right in your neighborhood.
            </p>

            {/* Search Box */}
            <div className="w-full max-w-xl mx-auto lg:mx-0 mb-6 relative z-20 shadow-xl shadow-slate-200/60 rounded-2xl bg-white border border-slate-200/80 p-2 sm:p-2.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-3 py-2">
                <Search className="w-5 h-5 text-indigo-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Business name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-base font-medium text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
                />
              </div>

              <div className="hidden sm:block w-px h-8 bg-slate-200" />

              <div className="flex items-center gap-2 px-3 py-2 sm:w-44">
                <MapPin className="w-4 h-4 text-fuchsia-500 shrink-0" />
                <input
                  type="text"
                  placeholder="City..."
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full text-base font-medium text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
                />
              </div>

              <Link
                href={`/listings?q=${encodeURIComponent(searchTerm)}&city=${encodeURIComponent(selectedCity)}`}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-7 py-3 rounded-[10px] transition-all shadow-md shadow-indigo-600/30 text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-6">
              <span className="text-slate-500 text-sm font-semibold">Popular Searches:</span>
              {popularSearches.map((tag) => (
                <Link
                  key={tag}
                  href={`/listings?q=${encodeURIComponent(tag)}`}
                  className="px-3.5 py-1.5 bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 text-sm font-medium rounded-full border border-slate-200 transition-colors shadow-2xs"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Animated Floating Visuals */}
          <div className="hidden lg:block relative perspective-1000 pl-4 lg:pl-0 h-[480px]">
            {/* Center soft glow */}
            <div className="absolute inset-0 bg-indigo-100/40 blur-[90px] rounded-full scale-90" />

            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Center Floating Search & Category Preview Pill */}
              <div className="absolute z-30 w-full max-w-[340px] bg-white/85 backdrop-blur-xl rounded-3xl p-5 border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] animate-float">
                <div className="flex items-center gap-3 bg-slate-50/90 rounded-2xl p-3.5 border border-slate-100">
                  <Search className="text-indigo-600 shrink-0" size={20} />
                  <div className="h-2.5 bg-slate-200 rounded-full w-28" />
                  <div className="h-6 w-px bg-slate-200 mx-1" />
                  <MapPin className="text-fuchsia-500 shrink-0" size={20} />
                  <div className="h-2.5 bg-slate-200 rounded-full w-16" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2.5">
                  <div className="h-18 bg-white rounded-2xl border border-slate-100 shadow-xs flex flex-col items-center justify-center gap-1.5 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <Star className="text-amber-500 fill-amber-500" size={15} />
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded w-10" />
                  </div>

                  <div className="h-18 bg-white rounded-2xl border border-slate-100 shadow-xs flex flex-col items-center justify-center gap-1.5 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Building className="text-blue-500" size={15} />
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded w-12" />
                  </div>

                  <div className="h-18 bg-white rounded-2xl border border-slate-100 shadow-xs flex flex-col items-center justify-center gap-1.5 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Users className="text-emerald-500" size={15} />
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded w-10" />
                  </div>
                </div>
              </div>

              {/* Floating Map Pin Badge: Mumbai */}
              <div className="absolute top-[8%] left-[8%] z-20 animate-float-delayed flex flex-col items-center gap-2">
                <div className="w-13 h-13 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-t-full rounded-bl-full rounded-br-sm rotate-45 flex items-center justify-center shadow-[0_10px_20px_rgba(217,70,239,0.35)] border-2 border-white">
                  <div className="w-4 h-4 bg-white rounded-full -rotate-45" />
                </div>
                <div className="bg-white/95 backdrop-blur text-slate-800 font-bold text-xs px-3 py-1 rounded-lg border border-slate-100 shadow-lg">
                  Mumbai
                </div>
              </div>

              {/* Floating Map Pin Badge: Delhi */}
              <div className="absolute bottom-[18%] right-[5%] z-20 animate-float-slow flex flex-col items-center gap-2">
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-t-full rounded-bl-full rounded-br-sm rotate-45 flex items-center justify-center shadow-[0_10px_20px_rgba(99,102,241,0.35)] border-2 border-white">
                  <div className="w-3.5 h-3.5 bg-white rounded-full -rotate-45" />
                </div>
                <div className="bg-white/95 backdrop-blur text-slate-800 font-bold text-xs px-3 py-1 rounded-lg border border-slate-100 shadow-lg">
                  Delhi
                </div>
              </div>

              {/* Verified Business Review Card */}
              <div className="absolute -bottom-[6%] left-[4%] z-40 bg-white rounded-2xl p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] w-56 animate-float-delayed border border-slate-100 transform -rotate-6">
                <div className="flex gap-3 items-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                    <Building className="text-indigo-600" size={22} />
                  </div>
                  <div>
                    <div className="h-3 bg-slate-800 rounded w-24 mb-1.5" />
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={11} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 w-full">
                  <CheckCircle2 size={13} />
                  <span>Verified Business</span>
                </div>
              </div>

              {/* 5,000+ Listings Badge */}
              <div className="absolute top-[18%] right-[4%] z-40 bg-white rounded-2xl p-3.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] w-48 animate-float border border-slate-100 transform rotate-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                    <TrendingUp className="text-emerald-500" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-900 font-black text-xl leading-tight">5,000+</div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Listings</div>
                  </div>
                </div>
              </div>

              {/* Background Connecting Dashed Curves */}
              <svg className="absolute inset-0 w-full h-full z-10 opacity-50 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 100 150 Q 200 50 300 200 T 500 100" fill="none" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M 50 350 Q 250 250 350 400 T 550 300" fill="none" stroke="url(#grad2)" strokeWidth="2" strokeDasharray="6 6" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
