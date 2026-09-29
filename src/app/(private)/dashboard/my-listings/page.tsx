import type { Metadata } from "next";
import { MyListingsView } from "@/components/features/dashboard/my-listings";

export const metadata: Metadata = {
  title: "My Listings",
  description: "View, edit, and manage all your registered businesses on IndianListingBucket.",
};

export default function MyListingsPage() {
  return <MyListingsView />;
}
