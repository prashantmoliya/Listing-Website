import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: {
    template: "%s | IndianListingBucket",
    default: "Sign in, Register | IndianListingBucket",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative">
      {/* Top Bar with Back Link matching screenshot */}
      <div className="w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group select-none"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-0.5 transition-transform text-slate-500"
          />
          <span>Back</span>
        </Link>
      </div>

      {/* Main Centered Content */}
      <main className="flex-1 flex items-center justify-center py-4 sm:py-8">
        {children}
      </main>

      {/* Bottom spacer */}
      <div className="w-full" />
    </div>
  );
}