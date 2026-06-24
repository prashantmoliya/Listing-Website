"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm">© {new Date().getFullYear()} Business Listing. All rights reserved.</p>
        <p className="text-sm text-slate-400">Simple business directory website structure.</p>
      </div>
    </footer>
  );
}
