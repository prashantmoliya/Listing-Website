"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  StepperHeader,
  Step1BasicInfo,
  Step2ContactLocation,
  Step3PhotosSocial,
  Step4SeoDetails,
  Step5ChoosePlan,
  FormSuccessCard,
} from "./form";

interface ListingFormWizardProps {
  mode?: "create" | "edit";
  listingId?: string;
}

export function ListingFormWizard({
  mode = "create",
  listingId,
}: ListingFormWizardProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State matching all 5 steps
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    name: mode === "edit" ? "Royal Palace Heritage Hotel & Resort" : "",
    category: mode === "edit" ? "Hotels & Travel" : "",
    shortDescription:
      mode === "edit"
        ? "Experience 5-star royal heritage in the heart of Jaipur"
        : "",
    fullDescription:
      mode === "edit"
        ? "Centrally located heritage hotel offering opulent suites, royal dining, and world-class hospitality in the heart of Jaipur."
        : "",
    established: mode === "edit" ? "2015" : "",
    employees: mode === "edit" ? "21-50" : "",
    gstin: mode === "edit" ? "08AAACR1234F1Z5" : "",
    tags: mode === "edit" ? ["hotel", "luxury", "jaipur"] : ["hotel"],

    // Step 2: Location & Contact + Business Hours
    state: mode === "edit" ? "Rajasthan" : "Andhra Pradesh",
    city: mode === "edit" ? "Jaipur" : "Adoni",
    address: mode === "edit" ? "Palace Road, Near City Palace" : "",
    pincode: mode === "edit" ? "302002" : "",
    latitude: mode === "edit" ? "28.7041" : "",
    longitude: mode === "edit" ? "77.1025" : "",
    phone: mode === "edit" ? "+91 92438 37806" : "",
    secondaryPhone: mode === "edit" ? "" : "",
    email: mode === "edit" ? "business@email.com" : "",
    website: mode === "edit" ? "https://yourbusiness.com" : "",
    is24x7: mode === "edit" ? true : false,
    openTime: "09:00",
    closeTime: "18:00",
    closedDays: ["Sunday"],

    // Step 3: Photos & Social Links
    logo:
      mode === "edit"
        ? "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200"
        : "",
    gallery:
      mode === "edit"
        ? [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500",
          ]
        : [],
    whatsapp: mode === "edit" ? "+91 92438 37806" : "",
    facebook: mode === "edit" ? "https://facebook.com/royalpalace" : "",
    instagram: mode === "edit" ? "https://instagram.com/royalpalace" : "",
    twitter: mode === "edit" ? "https://twitter.com/royalpalace" : "",
    linkedin: mode === "edit" ? "https://linkedin.com/company/royalpalace" : "",
    youtube: mode === "edit" ? "https://youtube.com/@royalpalace" : "",

    // Step 4: SEO Details
    metaTitle:
      mode === "edit"
        ? "Best Heritage Hotel in Jaipur | Royal Palace"
        : "",
    metaDescription:
      mode === "edit"
        ? "Book luxury heritage suites at Royal Palace Hotel Jaipur. 5-star experience."
        : "",
    metaKeywords:
      mode === "edit" ? "hotel jaipur, royal palace, heritage resort" : "",

    // Step 5: Choose Plan
    selectedPlan: "free" as "free" | "featured",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    // Safeguard: Never submit unless the user is on Step 5
    if (currentStep < 5) {
      handleNext();
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      router.push("/dashboard/my-listings");
    }, 1500);
  };

  if (isSubmitted) {
    return <FormSuccessCard mode={mode} />;
  }

  return (
    <div className="w-full space-y-6 pb-12">
      {/* Title & Navigation Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {mode === "create" ? "Add New Business" : "Edit Business Listing"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Complete the 5 steps below to showcase your business to thousands of
            daily visitors.
          </p>
        </div>
        <Link href="/dashboard/my-listings">
          <Button
            type="button"
            variant="outline"
            className="h-9 px-3.5 rounded-[9px] border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            Cancel
          </Button>
        </Link>
      </div>

      {/* Stepper Header (1 to 5) */}
      <StepperHeader
        currentStep={currentStep}
        onSelectStep={(stepId) => setCurrentStep(stepId)}
      />

      {/* Step Form Body */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              (e.target as HTMLElement).tagName !== "TEXTAREA"
            ) {
              e.preventDefault();
              if (currentStep < 5) {
                handleNext();
              }
            }
          }}
        >
          {currentStep === 1 && (
            <Step1BasicInfo data={formData} onChange={handleInputChange} />
          )}

          {currentStep === 2 && (
            <Step2ContactLocation
              data={formData}
              onChange={handleInputChange}
            />
          )}

          {currentStep === 3 && (
            <Step3PhotosSocial
              data={formData}
              onChange={handleInputChange}
            />
          )}

          {currentStep === 4 && (
            <Step4SeoDetails
              data={formData}
              onChange={handleInputChange}
            />
          )}

          {currentStep === 5 && (
            <Step5ChoosePlan
              data={formData}
              onChange={handleInputChange}
            />
          )}

          {/* Stepper Footer Buttons */}
          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
            {currentStep > 1 ? (
              <Button
                key="wizard-prev-btn"
                type="button"
                variant="outline"
                onClick={handlePrev}
                className="h-11 px-5 rounded-[10px] border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <Button
                key="wizard-next-btn"
                type="button"
                onClick={handleNext}
                className="h-11 px-6 rounded-[10px] bg-[#5c67f2] hover:bg-[#4f59e0] text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/20 cursor-pointer flex items-center gap-2"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                key="wizard-submit-btn"
                type="button"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="h-11 px-7 rounded-[10px] bg-[#5c67f2] hover:bg-[#4f59e0] text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/20 cursor-pointer flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Listing...</span>
                  </>
                ) : (
                  <>
                    <span>Submit for Review</span>
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
