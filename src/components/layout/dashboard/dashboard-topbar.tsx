"use client";

import { usePathname } from "next/navigation";
import {
  Menu,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardTopbarProps {
  onOpenMobile: () => void;
}

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  "/dashboard": {
    title: "Dashboard Overview",
    subtitle: "Welcome back! Here's what is happening with your listings.",
  },
  "/dashboard/my-listings": {
    title: "My Listings",
    subtitle: "Manage, view, and update your registered business listings.",
  },
  "/dashboard/create-listing": {
    title: "Add New Listing",
    subtitle: "Follow the 5 easy steps to add your business on India's top directory.",
  },
  "/dashboard/customer-reviews": {
    title: "Customer Reviews",
    subtitle: "Monitor verified customer feedback and ratings received on your businesses.",
  },
  "/dashboard/my-reviews": {
    title: "My Reviews",
    subtitle: "View and manage reviews you posted for businesses across the platform.",
  },
};

export function DashboardTopbar({ onOpenMobile }: DashboardTopbarProps) {
  const pathname = usePathname();

  // Find matching title or default
  const pageInfo =
    pageTitles[pathname] ||
    (pathname.startsWith("/dashboard/edit-listing") || pathname.startsWith("/edit-listing")
      ? {
          title: "Edit Listing",
          subtitle: "Update your business details, media, and operating hours.",
        }
      : {
          title: "Portal",
          subtitle: "Manage your business listings and customer inquiries.",
        });

  return (
    <header className="h-20 bg-white border-b border-slate-200/80 px-4 sm:px-7 flex items-center justify-between sticky top-0 z-30 select-none">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onOpenMobile}
          aria-label="Open Navigation"
          className="lg:hidden text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </Button>

        <div className="hidden sm:flex flex-col">
          <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
            {pageInfo.title}
          </h1>
          <p className="text-xs text-slate-400 font-medium truncate max-w-xs md:max-w-md">
            {pageInfo.subtitle}
          </p>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Notifications Icon */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Notifications"
          className="relative text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-slate-200/80 cursor-pointer"
        >
          <Bell className="w-4.5 h-4.5" />
          <span className="w-2 h-2 rounded-full bg-indigo-600 ring-2 ring-white absolute top-2 right-2" />
        </Button>

        {/* User Mini Avatar Button */}
        <div className="flex items-center gap-2 pl-2.75 border-l border-slate-200/80">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="User profile"
            className="w-9 h-9 rounded-[10px] bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-bold text-xs ring-2 ring-indigo-50 shrink-0 cursor-pointer transition-colors"
          >
            RS
          </Button>
        </div>
      </div>
    </header>
  );
}
