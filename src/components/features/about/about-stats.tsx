"use client";

import { Container } from "@/components/common";

const stats = [
  { value: "344+", label: "Businesses Listed" },
  { value: "1.7K+", label: "Cities Covered" },
  { value: "28", label: "States & UTs" },
  { value: "1K+", label: "Monthly Visitors" },
];

export function AboutStats() {
  return (
    <section className="py-12 bg-card border-b border-border shadow-xs">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
