"use client";

import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Search,
  Link2,
  Code2,
  Rocket,
  Users,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { featuresList } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Search,
  Link2,
  SearchCode: Code2,
  Rocket,
  Users,
  ShieldCheck,
  Sparkles,
};

const SEARCH_QUERIES = [
  "plumber near me",
  "best CA in Delhi",
  "digital marketing agency",
  "wedding photographer",
  "CCTV installation",
  "yoga classes nearby",
  "SEO company India",
  "interior designer Surat",
];

export default function GetDiscovered() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHold, setIsHold] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const isHoldRef = useRef(false);
  const curIdxRef = useRef(0);

  isHoldRef.current = isHold;
  curIdxRef.current = activeIdx;

  // Auto-cycle through feature nodes every 3 seconds when not hovered
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoldRef.current) {
        setActiveIdx((prev) => (prev + 1) % featuresList.length);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Spawn incoming search query bubbles towards the center card
  useEffect(() => {
    let queryIdx = 0;
    const interval = setInterval(() => {
      if (document.hidden || !stageRef.current) return;

      const stage = stageRef.current;
      const R = stage.clientWidth / 2;
      const angle = Math.random() * Math.PI * 2;
      const startX = Math.cos(angle) * R * 1.05;
      const startY = Math.sin(angle) * R * 1.05;

      const queryEl = document.createElement("div");
      queryEl.className = "radar-query-bubble";
      queryEl.textContent = "🔎 " + SEARCH_QUERIES[queryIdx++ % SEARCH_QUERIES.length];
      stage.appendChild(queryEl);

      const base = "translate(-50%, -50%) ";
      const anim = queryEl.animate(
        [
          { transform: `${base}translate(${startX}px, ${startY}px)`, opacity: 0 },
          { opacity: 1, offset: 0.2 },
          { transform: `${base}translate(0px, 0px) scale(0.4)`, opacity: 0.9 },
        ],
        {
          duration: 2600,
          easing: "cubic-bezier(.5,0,.3,1)",
        }
      );

      anim.onfinish = () => {
        queryEl.remove();
      };
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const activeFeature = featuresList[activeIdx] || featuresList[0];
  const ActiveIconComp = iconMap[activeFeature.icon] || Sparkles;

  return (
    <section className="relative overflow-hidden py-20 px-4 text-center bg-[radial-gradient(circle_at_50%_45%,#e2dbff_0%,#efecff_45%,#f6f5ff_78%)]">
      {/* Subtle Dot Grid Mask */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(79,45,224,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(circle at 50% 50%, #000, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-indigo-700 mb-4 tracking-tight leading-none text-center">
          Get Discovered!
        </h2>

        {/* Lead Subtitle */}
        <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto font-medium leading-relaxed text-center">
          List your business on India&apos;s growing Business Listing Platform and reach more customers every day.
        </p>

        {/* Radar Discovery Stage */}
        <div
          ref={stageRef}
          className={`radar-stage relative mx-auto my-7 sm:my-8 ${
            isHold ? "hold-radar" : ""
          }`}
          style={{
            width: "min(560px, 92vw)",
            height: "min(560px, 92vw)",
          }}
        >
          {/* Concentric Rings */}
          <div className="absolute inset-[6%] rounded-full border border-dashed border-[#7c4dff]/25 pointer-events-none" />
          <div className="absolute inset-[22%] rounded-full border border-dashed border-[#7c4dff]/25 pointer-events-none" />
          <div className="absolute inset-[36%] rounded-full border border-solid border-[#7c4dff]/40 pointer-events-none" />

          {/* Sweeping Radar Beam (Continuous 360 Full Round) */}
          <div className="sweep" />

          {/* Expanding Ripple Waves from Card Center to Outside */}
          <div className="wave wave-1" />
          <div className="wave wave-2" />
          <div className="wave wave-3" />

          {/* Orbit Layer with 8 Orbiting Feature Nodes */}
          <div className="absolute inset-0 orbit-rotation">
            {featuresList.map((feat, i) => {
              const deg = i * 45 - 90;
              const isActive = i === activeIdx;
              const IconComp = iconMap[feat.icon] || Sparkles;

              return (
                <div
                  key={feat.title}
                  className="absolute left-1/2 top-1/2 w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] -ml-[24px] -mt-[24px] sm:-ml-[27px] sm:-mt-[27px]"
                  style={{
                    transform: `rotate(${deg}deg) translate(calc(min(560px, 92vw) * 0.44)) rotate(${-deg}deg)`,
                  }}
                >
                  <button
                    type="button"
                    tabIndex={0}
                    aria-label={feat.title}
                    onMouseEnter={() => {
                      setIsHold(true);
                      setActiveIdx(i);
                    }}
                    onMouseLeave={() => setIsHold(false)}
                    onClick={() => setActiveIdx(i)}
                    className={`node-counter-spin w-full h-full rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white scale-115 shadow-lg shadow-indigo-500/35 border-0 z-20"
                        : `${feat.bg} border border-white/80 shadow-xs hover:scale-105 hover:shadow-md`
                    }`}
                  >
                    <IconComp
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        isActive ? "text-white" : feat.color
                      }`}
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Center Business Listing Card Container (Fixed at 50% / 50%) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[48%] sm:w-[44%] max-w-[260px] z-10 select-none pointer-events-none">
            {/* Card with Smooth Floating Zoom In/Out */}
            <div className="card-floating bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 text-left shadow-[0_20px_50px_rgba(79,45,224,0.25)] border border-[#e6e3fb] pointer-events-auto">
              {/* Top Ribbon */}
              <span className="absolute -top-2.5 -right-2 bg-gradient-to-r from-[#4f2de0] to-[#d946ef] text-white text-[9px] sm:text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md shadow-indigo-500/30 whitespace-nowrap">
                FREE · ₹200
              </span>

              {/* Banner Placeholder Bar */}
              <div className="h-12 sm:h-16 rounded-xl bg-gradient-to-br from-[#c7bbff] to-[#e9e3ff] flex items-end gap-1.5 px-3 py-2">
                <span className="flex-1 bg-[#4f2de0]/35 rounded-t-sm h-[40%]" />
                <span className="flex-1 bg-[#4f2de0]/45 rounded-t-sm h-[75%]" />
                <span className="flex-1 bg-[#4f2de0]/30 rounded-t-sm h-[55%]" />
              </div>

              {/* Business Title */}
              <h4 className="font-extrabold text-xs sm:text-[13px] text-[#14123a] mt-2 mb-0.5 truncate">
                Bussiness Listing
              </h4>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
                <span>★★★★★</span>
                <span className="text-[10px] text-[#6b6890] font-normal">(125)</span>
              </div>

              {/* Location */}
              <div className="text-[10.5px] text-[#6b6890] mt-0.5 truncate">
                📍 Delhi, India
              </div>

              {/* Verified Badge */}
              <span className="inline-block mt-1.5 bg-[#dcfce7] text-[#15803d] text-[9.5px] font-bold px-2 py-0.5 rounded-md border border-emerald-100">
                ✔ Verified Business
              </span>

              {/* Floating Rank Pill Badge */}
              <span className="absolute left-3 -bottom-3 bg-[#4f2de0] text-white text-[9.5px] sm:text-[10.5px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md shadow-indigo-500/35 whitespace-nowrap">
                🏆 #1 in Digital Marketing
              </span>
            </div>
          </div>
        </div>

        {/* Feature Detail Showcase Panel */}
        <div className="max-w-[520px] mx-auto bg-white border border-[#e6e3fb] shadow-[0_10px_30px_rgba(79,45,224,0.1)] rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-left min-h-[88px] transition-all">
          <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${activeFeature.bg}`}>
            <ActiveIconComp className={`w-7 h-7 sm:w-7.5 sm:h-7.5 ${activeFeature.color}`} strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight">
              {activeFeature.title}
            </h3>
            <p className="text-[#5d5b80] text-xs sm:text-sm mt-1 leading-snug">
              {activeFeature.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Global Scoped Styles for Radar Physics and Animations */}
      <style jsx global>{`
        .sweep {
          position: absolute;
          inset: 6%;
          border-radius: 50%;
          background: conic-gradient(from 0deg, rgba(124, 77, 255, 0.3), transparent 25%);
          animation: sp 5s linear infinite;
          pointer-events: none;
        }

        @keyframes sp {
          to {
            transform: rotate(360deg);
          }
        }

        .wave {
          position: absolute;
          inset: 36%;
          border-radius: 50%;
          border: 2px solid #7c4dff;
          opacity: 0;
          pointer-events: none;
          animation: wv 3.6s ease-out infinite;
        }

        .wave-1 {
          animation-delay: 0s;
        }
        .wave-2 {
          animation-delay: 1.2s;
        }
        .wave-3 {
          animation-delay: 2.4s;
        }

        @keyframes wv {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(2.6);
            opacity: 0;
          }
        }

        @keyframes card-zoom-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 18px 45px rgba(79, 45, 224, 0.22);
          }
          50% {
            transform: translateY(-8px) scale(1.04);
            box-shadow: 0 28px 60px rgba(79, 45, 224, 0.32);
          }
        }

        .card-floating {
          position: relative;
          width: 100%;
          animation: card-zoom-float 3.4s ease-in-out infinite;
        }

        .orbit-rotation {
          animation: sp 70s linear infinite;
        }

        .node-counter-spin {
          animation: un 70s linear infinite;
        }

        @keyframes un {
          to {
            transform: rotate(-360deg);
          }
        }

        .hold-radar .orbit-rotation,
        .hold-radar .node-counter-spin {
          animation-play-state: paused;
        }

        .radar-query-bubble {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 25;
          white-space: nowrap;
          background: #ffffff;
          color: #14123a;
          border: 1px solid #e6e3fb;
          box-shadow: 0 10px 25px rgba(79, 45, 224, 0.18);
          padding: 6px 12px;
          border-radius: 99px;
          font-size: 11.5px;
          font-weight: 700;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
