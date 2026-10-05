"use client";

import { FileText, Send, UserCheck } from "lucide-react";
import { Container } from "@/components/common";

const STEPS = [
  {
    step: "01",
    title: "Add Your Business",
    desc: "Start your journey with IndianListingBucket today! Quick OTP verification in seconds.",
    icon: FileText,
    shapeBg: "bg-[#EAE4F8]",
    iconColor: "text-[#3B1C6E]",
    arrowColor: "text-[#3B1C6E]",
    ringColor: "ring-purple-500/15 shadow-[0_12px_28px_-6px_rgba(76,29,149,0.2)]",
  },
  {
    step: "02",
    title: "Submit Your Listing",
    desc: "Your customers are waiting for you. Add your details, services and move closer to success.",
    icon: Send,
    shapeBg: "bg-[#FEE9D7]",
    iconColor: "text-[#EA580C]",
    arrowColor: "text-[#EA580C]",
    ringColor: "ring-orange-500/15 shadow-[0_12px_28px_-6px_rgba(234,88,12,0.2)]",
  },
  {
    step: "03",
    title: "Get Listed & Discovered",
    desc: "Get verified and listed within 24 hours. Your business growth begins with IndianListingBucket.",
    icon: UserCheck,
    shapeBg: "bg-[#FDD9DF]",
    iconColor: "text-[#E11D48]",
    arrowColor: "",
    ringColor: "ring-rose-500/15 shadow-[0_12px_28px_-6px_rgba(225,29,72,0.2)]",
  },
];

export default function RegistrationStepsBanner() {
  return (
    <section className="relative py-16 sm:py-24 bg-linear-to-b from-slate-50/60 via-white to-slate-50/50 overflow-hidden border-y border-slate-100">
      
      {/* 1. Ambient Background Aura Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-r from-purple-200/25 via-indigo-100/30 to-amber-100/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200/25 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-rose-200/25 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/25 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* 2. Designer Dot Matrix Overlay with Soft Radial Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50 -z-10"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.15px, transparent 1.15px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 65% at 50% 50%, #000 25%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 65% at 50% 50%, #000 25%, transparent 80%)",
        }}
      />

      {/* 3. Subtle Connecting Flow Wave Line (Desktop) */}
      <div className="hidden md:block absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-28 pointer-events-none -z-10 opacity-35">
        <svg className="w-full h-full" viewBox="0 0 900 100" fill="none">
          <path 
            d="M50,50 C200,10 300,90 450,50 C600,10 700,90 850,50" 
            stroke="url(#flowWaveGradient)" 
            strokeWidth="2" 
            strokeDasharray="6 6"
          />
          <defs>
            <linearGradient id="flowWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-2 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            List Your Business in 3 Simple Steps
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Simple, fast, and free onboarding to grow your business
          </p>
        </div>

        {/* 3 Steps Flow */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 lg:gap-8 max-w-5xl mx-auto relative z-10">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            const hasNext = index < STEPS.length - 1;

            return (
              <div 
                key={item.step} 
                className="flex flex-col md:flex-row items-center flex-1 w-full"
              >
                {/* Step Item Content */}
                <div className="flex flex-col items-center text-center flex-1 w-full max-w-xs mx-auto group">

                  {/* Rotated Rounded Square Icon Container */}
                  <div className="h-24 sm:h-28 flex items-center justify-center">
                    <div 
                      className={`w-18 h-18 sm:w-20 sm:h-20 rounded-[22px] sm:rounded-[26px] ${item.shapeBg} rotate-45 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-[50deg] ring-4 ${item.ringColor}`}
                    >
                      <div className="-rotate-45 flex items-center justify-center">
                        <Icon 
                          className={`w-7 h-7 sm:w-8 sm:h-8 ${item.iconColor} transition-transform duration-300 group-hover:scale-110`} 
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold text-[#2D1B54] tracking-tight group-hover:text-indigo-900 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm sm:text-[14px] text-slate-500 font-normal leading-relaxed max-w-[270px] sm:max-w-[290px]">
                    {item.desc}
                  </p>
                </div>

                {/* Connecting Arrow (Desktop) */}
                {hasNext && (
                  <div className="hidden md:flex h-24 sm:h-28 items-center justify-center shrink-0 pl-2.75 lg:pl-4.75">
                    <svg 
                      className={`w-12 lg:w-16 h-4 ${item.arrowColor}`} 
                      viewBox="0 0 64 16" 
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M0 8H56" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                      />
                      <path 
                        d="M50 2L58 8L50 14" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                )}

                {/* Connecting Arrow (Mobile - Vertical) */}
                {hasNext && (
                  <div className="flex md:hidden items-center justify-center mt-8 my-1 text-slate-300">
                    <svg 
                      className={`w-4 h-10 ${item.arrowColor}`} 
                      viewBox="0 0 16 32" 
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M8 0V26" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                      />
                      <path 
                        d="M2 20L8 28L14 20" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
