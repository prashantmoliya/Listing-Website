"use client";

import Link from "next/link";
import { Building2, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MyListingsEmpty() {
  return (
    <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-4">
      <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
        <Building2 className="w-7 h-7" />
      </div>
      <div className="space-y-1 max-w-sm mx-auto">
        <h3 className="text-base font-bold text-slate-900">
          No listings found
        </h3>
        <p className="text-xs text-slate-500">
          No businesses match your current filter or search criteria.
        </p>
      </div>
      <Link href="/dashboard/create-listing" className="inline-block">
        <Button
          type="button"
          className="h-10 rounded-[10px] bg-[#5c67f2] hover:bg-[#4f59e0] text-white text-xs font-semibold px-4 cursor-pointer"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Create First Listing
        </Button>
      </Link>
    </div>
  );
}
