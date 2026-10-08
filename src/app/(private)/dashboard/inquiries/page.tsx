import type { Metadata } from "next";
import { InquiriesView } from "@/components/features/dashboard/inquiries";

export const metadata: Metadata = {
  title: "Customer Inquiries",
  description: "View and manage incoming customer service inquiries and quote requests for your businesses.",
};

export default function CustomerInquiriesPage() {
  return <InquiriesView />;
}
