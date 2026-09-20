"use client";

import { Container } from "@/components/common";

const values = [
  {
    icon: "🎯",
    title: "Our Mission",
    description:
      "To connect every Indian business with its local customers through a powerful, easy-to-use directory platform.",
  },
  {
    icon: "👁️",
    title: "Our Vision",
    description:
      "To become India's most trusted and comprehensive business discovery platform, empowering local commerce.",
  },
  {
    icon: "🤝",
    title: "Our Values",
    description:
      "Transparency, trust, and community-first thinking drive every feature and decision we make.",
  },
];

export function AboutValues() {
  return (
    <section className="py-20 md:py-24 bg-slate-50/70 border-t border-border">
      <Container>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-14 tracking-tight">
          What drives us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4"
            >
              <div className="text-4xl mb-1">{item.icon}</div>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
