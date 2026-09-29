"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormSuccessCardProps {
  mode: "create" | "edit";
}

export function FormSuccessCard({ mode }: FormSuccessCardProps) {
  return (
    <div className="max-w-xl mx-auto p-8 sm:p-12 bg-white rounded-3xl border border-slate-200/90 text-center shadow-lg shadow-indigo-500/5 space-y-4 my-8 animate-in zoom-in-95">
      <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
        <CheckCircle2 size={36} />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
        {mode === "create"
          ? "Listing Submitted Successfully!"
          : "Listing Updated Successfully!"}
      </h2>
      <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
        {mode === "create"
          ? "Your business listing has been submitted for review. It will be live on IndianListingBucket shortly."
          : "Your business details have been updated and synced with your public listing."}
      </p>
      <div className="pt-3">
        <Link href="/dashboard/my-listings">
          <Button
            type="button"
            className="h-11 px-6 rounded-[10px] bg-[#5c67f2] hover:bg-[#4f59e0] text-white font-semibold text-sm cursor-pointer"
          >
            Go to My Listings
          </Button>
        </Link>
      </div>
    </div>
  );
}
