import { z } from "zod";

export const listingInquiryFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name must be less than 80 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  service: z
    .string()
    .min(1, "Please select or specify the service needed"),
  preferredContact: z.enum(["WhatsApp", "Phone", "Email"]),
  message: z
    .string()
    .min(5, "Please describe your requirement (at least 5 characters)")
    .max(1000, "Requirement description must be less than 1000 characters"),
});

export type ListingInquiryFormValues = z.infer<typeof listingInquiryFormSchema>;
