import type { Metadata } from "next";
import { CustomerReviewsView } from "@/components/features/dashboard/customer-reviews";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Monitor customer reviews and feedback received on your business listings.",
};

export default function CustomerReviewsPage() {
  return <CustomerReviewsView />;
}
