import type { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard";

export const metadata: Metadata = {
  title: {
    template: "%s | IndianListingBucket Portal",
    default: "Dashboard | IndianListingBucket",
  },
  description: "Manage your business listings, customer reviews, and inquiries.",
};

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}