"use client";

import { MessageSquare } from "lucide-react";
import { Container } from "@/components/common";

export function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 py-16 md:py-20 text-white relative overflow-hidden text-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-300/20 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10 max-w-3xl">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/25 text-xs font-semibold shadow-xs mb-5">
          <MessageSquare size={14} />
          <span>Get in Touch</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          We&apos;re here to help
        </h1>

        {/* Subtitle */}
        <p className="text-white/95 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Have a question about your listing, need support, or want to partner
          with us? Reach out — we&apos;d love to hear from you.
        </p>
      </Container>
    </section>
  );
}
