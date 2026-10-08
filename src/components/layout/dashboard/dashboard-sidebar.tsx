"use client";

import { cn } from "@/lib/utils";
import {
  Building,
  Building2,
  Globe,
  Inbox,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  PlusCircle,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  exact?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    title: "My Listings",
    href: "/dashboard/my-listings",
    icon: Building2,
  },
  {
    title: "Add Listing",
    href: "/dashboard/create-listing",
    icon: PlusCircle,
  },
  {
    title: "Customer Inquiries",
    href: "/dashboard/inquiries",
    icon: Inbox,
  },
  {
    title: "Customer Reviews",
    href: "/dashboard/customer-reviews",
    icon: Star,
  },
  {
    title: "My Reviews",
    href: "/dashboard/my-reviews",
    icon: MessageSquareText,
  },
];

interface DashboardSidebarProps {
  onCloseMobile?: () => void;
}

export function DashboardSidebar({ onCloseMobile }: DashboardSidebarProps) {
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col h-full select-none">
      {/* Brand Header */}
      <div className="h-20 px-5 border-b border-slate-200/80 flex items-center justify-between shrink-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 group"
          onClick={onCloseMobile}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-fuchsia-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
            <Building className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5 leading-none">
              <span className="text-lg font-black tracking-tight text-slate-900">
                IndianListing
              </span>
              <span className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
                Bucket
              </span>
            </div>
            <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5">
              Business Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-3.5 py-4 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Main Menu
        </div>
        {navItems.map((item) => {
          const active = isActive(item);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onCloseMobile}
              className={cn(
                "group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                active
                  ? "bg-indigo-50/90 text-indigo-600 font-semibold shadow-2xs shadow-indigo-100"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Icon
                className={cn(
                  "w-4.5 h-4.5 transition-colors",
                  active
                    ? "text-indigo-600"
                    : "text-slate-400 group-hover:text-slate-600"
                )}
              />
              <span>{item.title}</span>
            </Link>
          );
        })}

        {/* Quick Link to Public Portal */}
        <div className="pt-4 mt-4 border-t border-slate-100">
          <div className="px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Shortcut
          </div>
          <Link
            href="/"
            onClick={onCloseMobile}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <Globe className="w-4.5 h-4.5 text-slate-400" />
            <span>View Public Website</span>
          </Link>
        </div>

        {/* Upgrade / Promotion Badge Banner */}
        <div className="mt-6 mx-1 p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-transparent border border-indigo-100">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs">
            <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>Boost Your Listings</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
            Get 5x more inquiries by featuring your verified business!
          </p>
          <Link
            href="/advertise"
            className="inline-block mt-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            View Growth Plans &rarr;
          </Link>
        </div>
      </div>

      {/* User Footer Profile */}
      <div className="p-3.5 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              RS
            </div>
            <div className="flex flex-col truncate">
              <span className="text-xs font-bold text-slate-900 truncate">
                Rahul Sharma
              </span>
              <span className="text-[11px] text-slate-400 truncate">
                rahul@business.in
              </span>
            </div>
          </div>
          <Link
            href="/login"
            title="Sign Out"
            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0"
          >
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
