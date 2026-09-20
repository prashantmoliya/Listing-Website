import type { Metadata } from "next";
import {
  ContactHero,
  ContactCards,
  ContactFormSection,
} from "@/components/features/contact";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch | IndianListingBucket",
  description:
    "Have a question about your business listing, need support, or want to partner with us? Reach out to IndianListingBucket — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Emerald Hero Header */}
      <ContactHero />

      {/* 2. Floating Contact Information Cards */}
      <ContactCards />

      {/* 3. Main Contact Form & FAQ Section */}
      <ContactFormSection />
    </div>
  );
}
