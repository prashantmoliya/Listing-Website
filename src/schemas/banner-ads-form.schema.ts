import { z } from "zod";

export const bannerTypeOptions = [
  { value: "Header Banner", label: "Header Banner" },
  { value: "Footer Banner", label: "Footer Banner" },
  { value: "Side Banner", label: "Side Banner" },
  { value: "Blog Page Banner", label: "Blog Page Banner" },
  { value: "All in One", label: "All in One (Complete Bundle)" },
] as const;

export const bannerAdsFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  mobile: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number")
    .max(15, "Mobile number too long")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),

  bannerType: z.string().min(1, "Please select a banner placement option"),

  width: z
    .string()
    .min(1, "Width is required")
    .max(20, "Please enter a valid width"),

  height: z
    .string()
    .min(1, "Height is required")
    .max(20, "Please enter a valid height"),

  notes: z.string().max(1000, "Notes must be under 1000 characters").optional(),
});

export type BannerAdsFormValues = z.infer<typeof bannerAdsFormSchema>;
