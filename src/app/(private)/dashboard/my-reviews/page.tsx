import type { Metadata } from "next";
import { MyReviewsView } from "@/components/features/dashboard/my-reviews";

export const metadata: Metadata = {
  title: "My Reviews",
  description: "View and manage all the reviews and ratings you have posted for businesses.",
};

export default function MyReviewsPage() {
  return <MyReviewsView />;
}
