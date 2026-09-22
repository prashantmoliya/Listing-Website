import type { Metadata } from "next";
import { RegisterForm } from "@/components/features/auth";

export const metadata: Metadata = {
  title: "Create Free Account, Register",
  description: "Create a new account on IndianListingBucket to list your business and connect with customers.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
