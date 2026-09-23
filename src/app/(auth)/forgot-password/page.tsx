import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/features/auth";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your IndianListingBucket password.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
