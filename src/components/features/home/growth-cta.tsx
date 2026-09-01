"use client";

import Link from "next/link";
import { 
  Rocket, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap, 
  CheckCircle2, 
  Star 
} from "lucide-react";
import { Container } from "@/components/common";

export default function GrowthCta() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white">
      <Container>
        <div className="bg-gradient-to-br from-indigo-50/90 via-white to-fuchsia-50/90 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-indigo-100/70">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2.5rem] pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 blur-[120px] rounded-full" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-fuchsia-300/30 blur-[120px] rounded-full" />
          </div>

          {/* Left Column: Heading, Subtitle, Buttons */}
          <div className="lg:w-1/2 text-center lg:text-left relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Ready to accelerate your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
                business growth?
              </span>
            </h2>

            <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join a thriving community of successful businesses on IndianListingBucket. Create your free profile today and start connecting with new local customers instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/register"
                className="bg-indigo-600 text-white hover:bg-indigo-500 font-bold px-8 py-4 rounded-[10px] transition-all shadow-[0_10px_20px_rgba(99,102,241,0.3)] hover:-translate-y-1 w-full sm:w-auto text-center border border-indigo-500 flex items-center justify-center gap-2"
              >
                <Rocket size={18} />
                <span>Create Free Account</span>
              </Link>

              <Link
                href="/listings"
                className="bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-[10px] shadow-xs border border-slate-200 transition-all hover:border-slate-300 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <span>Browse Listings</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: Business Growth Visual Graphic */}
          <div className="lg:w-1/2 relative z-10 w-full max-w-md lg:max-w-none mx-auto flex justify-center">
            <div className="relative group w-full max-w-[480px]">
              <div className="absolute -inset-2 bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/80 shadow-2xl transition-all duration-700 group-hover:bg-white/80" />
              
              <div className="relative z-10 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Growth Analytics</h4>
                      <p className="text-xs text-slate-400">Live IndianListingBucket Network</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/80">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-sm font-bold">
                      <TrendingUp size={16} />
                      <span>+320%</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">Customer Inquiries</div>
                  </div>

                  <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/80">
                    <div className="flex items-center gap-1.5 text-indigo-400 text-sm font-bold">
                      <Users size={16} />
                      <span>500+</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">Cities Reach</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold text-white">Instant Verified Badge</div>
                      <div className="text-[10px] text-indigo-300">Boosts Customer Trust by 4.8x</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star size={12} className="fill-amber-400" />
                    <span className="text-xs font-black text-white ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
