import type { Metadata } from "next";
import { LoginForm } from "@/components/features/auth";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your IndianListingBucket account.",
};

export default function LoginPage() {
  return <LoginForm />;
}
