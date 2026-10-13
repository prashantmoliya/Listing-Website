# Unused Code Audit Report

> **Project:** IndianListingBucket Web  
> **Date:** September 30, 2026  
> **Status:** Report only (No code modified or removed)

This document contains a comprehensive audit of all unused files, orphaned components, unused imports, and variables across the entire codebase.

---

## 1. Unused / Orphaned Files (Dead Code)

These files belong to earlier iterations of the multi-step listing wizard. They are no longer imported or referenced anywhere in the application and can be safely deleted when ready.

| # | File Path | Original Purpose | Why it is Unused Now |
|---|---|---|---|
| 1 | `src/components/features/dashboard/listing-wizard/form/step-3-timing-hours.tsx` | Business timing and hours step | Timing hours were merged into Step 2 (`step-2-contact-location.tsx`). Step 3 is now Photos & Social Links. |
| 2 | `src/components/features/dashboard/listing-wizard/form/step-4-media-social.tsx` | Media and social links step | Social links were moved to Step 3 (`step-3-photos-social.tsx`). Step 4 is now SEO Details. |
| 3 | `src/components/features/dashboard/listing-wizard/form/step-5-features-review.tsx` | Features & review summary step | Replaced completely by the dedicated `step-5-choose-plan.tsx`. |

---

## 2. Unused Imports (Icons & Components)

These imports are brought into components from libraries like `lucide-react` but are never rendered in the JSX.

### Dashboard Components

| File Path | Line | Unused Import | Source |
|---|---|---|---|
| `src/components/features/dashboard/listing-wizard/listing-form-wizard.tsx` | Line 6 | `CheckCircle2` | `lucide-react` |
| `src/components/features/dashboard/my-listings/my-listings-table.tsx` | Line 17 | `Eye` | `lucide-react` |
| `src/components/features/dashboard/my-listings/my-listings-table.tsx` | Line 18 | `Star` | `lucide-react` |

### Public Pages & Layout Components

| File Path | Line | Unused Import | Source |
|---|---|---|---|
| `src/components/features/advertise/advertise-packages.tsx` | Line 4 | `Sparkles` | `lucide-react` |
| `src/components/features/featured/featured-sidebar.tsx` | Line 4 | `TrendingUp` | `lucide-react` |
| `src/components/features/home/hero.tsx` | Line 15 | `ShieldCheck` | `lucide-react` |
| `src/components/layout/footer.tsx` | Line 8 | `ArrowRight` | `lucide-react` |
| `src/components/layout/header.tsx` | Line 16 | `User` | `lucide-react` |

---

## 3. Unused Variables & Props

Variables that are declared, assigned, or destructured but never utilized in component logic or UI rendering.

| File Path | Line | Unused Identifier | Details |
|---|---|---|---|
| `src/components/features/dashboard/listing-wizard/listing-form-wizard.tsx` | Line 25 | `listingId` | Prop destructured in `ListingFormWizardProps` but never used in the component body. |
| `src/components/features/dashboard/listing-wizard/form/step-3-photos-social.tsx` | Line 26 | `onAddPhoto` | Declared in interface / prop arguments but not used. |
| `src/components/features/dashboard/overview/dashboard-stats-grid.tsx` | Line 31 | `pendingReplies` | Calculated from dataset but not displayed anywhere in the stats grid. |
| `src/components/ui/dialog.tsx` | Line 79 | `onPointerDownOutside` | Prop declared in wrapper interface but not passed or used. |
| `src/components/ui/dialog.tsx` | Line 80 | `onEscapeKeyDown` | Prop declared in wrapper interface but not passed or used. |

---

## 4. Unused Form Submit Parameters (`data` / `_data`)

In these mock / client-side auth and contact forms, the `onSubmit` handler receives form data, but because backend APIs are not yet hooked up, the variable is marked as unused by the TypeScript compiler and ESLint.

| File Path | Line | Identifier | Note |
|---|---|---|---|
| `src/components/features/auth/login-form.tsx` | Line 38 | `data` | Mock submission handler |
| `src/components/features/auth/register-form.tsx` | Line 42 | `data` | Mock submission handler |
| `src/components/features/auth/reset-password-form.tsx` | Line 34 | `data` | Mock submission handler |
| `src/components/features/contact/contact-form.tsx` | Line 36 | `_data` | Mock submission handler |
| `src/components/features/advertise/banner-ads-form.tsx` | Line 48 | `_data` | Mock submission handler |

---

## 5. Summary & Recommended Action Plan

- **Files to safely delete (3 files):**
  - `src/components/features/dashboard/listing-wizard/form/step-3-timing-hours.tsx`
  - `src/components/features/dashboard/listing-wizard/form/step-4-media-social.tsx`
  - `src/components/features/dashboard/listing-wizard/form/step-5-features-review.tsx`
- **Imports to clean up (8 items):**
  - Remove unused icon imports from `lucide-react` across the listed files.
- **Props/Variables to clean up (5 items):**
  - Remove or prefix unused variables (e.g. `_listingId`).
