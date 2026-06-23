"use client";

import Link from "next/link";
import { Container } from "@/components/common";

export default function Hero() {
  return (
    <section className="rounded-3xl bg-slate-900 px-6 py-14 text-white shadow-xl shadow-slate-900/10 sm:px-10">
      <Container className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-300">Business directory</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Find and discover verified businesses across India.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
          Create a modern listing website with organized company profiles, search-ready categories, and local business highlights.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/listings"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Browse listings
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-300 hover:bg-white/10"
          >
            Learn more
          </Link>
        </div>
      </Container>
    </section>
  );
}
