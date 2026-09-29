import type { Metadata } from "next";
import { DashboardOverview } from "@/components/features/dashboard/overview";

export const metadata: Metadata = {
  title: "Dashboard Overview",
  description: "Monitor your business listing performance, visitor inquiries, and customer feedback.",
};

export default function DashboardPage() {
  return <DashboardOverview />;
}
