import type { Metadata } from "next";
import { ResetPasswordForm } from "@/components/features/auth";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password for your IndianListingBucket account.",
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
