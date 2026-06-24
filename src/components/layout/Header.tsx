"use client";

import { navLinks } from "@/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Business Listing
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
