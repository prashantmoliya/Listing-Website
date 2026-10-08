"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Send, 
  Phone, 
  MessageSquare, 
  Mail, 
  Loader2
} from "lucide-react";
import { Modal } from "@/components/common/modal";
import { InputWithLabel } from "@/components/common/input-with-label";
import { TextareaWithLabel } from "@/components/common/textarea-with-label";
import { SelectWithLabel } from "@/components/common/select-with-label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { listingInquiryFormSchema, type ListingInquiryFormValues } from "@/schemas";
import { saveCustomerInquiry, type ListingItem } from "@/data";

interface ListingInquiryModalProps {
  listing: ListingItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ListingInquiryModal({
  listing,
  open,
  onOpenChange,
}: ListingInquiryModalProps) {
  const serviceOptions = (listing.servicesOffered || []).map((s) => ({
    value: s,
    label: s,
  }));

  if (serviceOptions.length > 0) {
    serviceOptions.push({
      value: "Other / Custom Requirement",
      label: "Other / Custom Requirement",
    });
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ListingInquiryFormValues>({
    resolver: zodResolver(listingInquiryFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: serviceOptions.length > 0 ? serviceOptions[0].value : "General Service Consultation",
      preferredContact: "WhatsApp",
      message: "",
    },
  });

  const handleClose = () => {
    reset();
    onOpenChange(false);
  };

  const onSubmit = async (data: ListingInquiryFormValues) => {
    // Brief submission delay for UX
    await new Promise((resolve) => setTimeout(resolve, 350));
    saveCustomerInquiry({
      listingId: listing.id,
      listingName: listing.name,
      listingCategory: listing.category,
      listingCity: listing.city,
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      service: data.service,
      preferredContact: data.preferredContact,
      message: data.message || "",
    });
    reset();
    onOpenChange(false);
  };

  return (
    <Modal
      open={open}
      onOpenChange={(val) => {
        onOpenChange(val);
        if (!val) {
          reset();
        }
      }}
      maxWidth="sm:max-w-xl"
      title="Send Service Inquiry"
      description={`Directly connect with ${listing.name} to receive quotes and service details.`}
      headerIcon={
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Send size={16} />
        </div>
      }
      asForm={true}
      onSubmit={handleSubmit(onSubmit)}
      footer={
        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end w-full gap-2 sm:gap-2.5">
          <Button
            type="button"
            variant="outline"
            disabled={isSubmitting}
            onClick={handleClose}
            className="w-full sm:w-auto h-9 sm:h-10 px-4 rounded-[10px] text-xs sm:text-sm font-semibold cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto h-9 sm:h-10 px-5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={14} className="animate-spin text-white" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={14} />
                <span>Submit Inquiry</span>
              </>
            )}
          </Button>
        </div>
      }
    >
      <div className="space-y-4 py-1 min-w-0">
        {/* Target Business Banner */}
        <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between gap-2.5 min-w-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              {listing.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-900 truncate">
                {listing.name}
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                {listing.category} • {listing.city}
              </p>
            </div>
          </div>
          <Badge variant="outline" className="bg-white text-indigo-700 border-indigo-200 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 shrink-0">
            Service Partner
          </Badge>
        </div>

        {/* Form grid with Controller inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="inquiry-full-name"
                label="Your Name"
                placeholder="e.g. Rahul Sharma"
                error={errors.fullName?.message}
                disabled={isSubmitting}
                {...field}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="inquiry-phone"
                label="Mobile Number"
                type="tel"
                placeholder="e.g. 98765 43210"
                error={errors.phone?.message}
                disabled={isSubmitting}
                {...field}
              />
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="inquiry-email"
                label="Email Address"
                type="email"
                placeholder="e.g. rahul@example.com"
                error={errors.email?.message}
                disabled={isSubmitting}
                {...field}
              />
            )}
          />

          <Controller
            name="service"
            control={control}
            render={({ field }) =>
              serviceOptions.length > 0 ? (
                <SelectWithLabel
                  id="inquiry-service"
                  label="Service Needed"
                  options={serviceOptions}
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="Choose a service"
                  error={errors.service?.message}
                  disabled={isSubmitting}
                />
              ) : (
                <InputWithLabel
                  id="inquiry-service"
                  label="Service Needed"
                  placeholder="e.g. Consultation / Service Quote"
                  error={errors.service?.message}
                  disabled={isSubmitting}
                  {...field}
                />
              )
            }
          />
        </div>

        {/* Preferred contact channel via Controller */}
        <Controller
          name="preferredContact"
          control={control}
          render={({ field }) => (
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-slate-700 select-none block">
                How should the business owner contact you?
              </label>
              <div className="grid grid-cols-1 min-[375px]:grid-cols-3 gap-1.5 sm:gap-2 min-w-0">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={isSubmitting}
                  onClick={() => field.onChange("WhatsApp")}
                  className={cn(
                    "h-9 sm:h-10 min-w-0 px-1 sm:px-2.5 rounded-[10px] border text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer transition-all",
                    field.value === "WhatsApp"
                      ? "bg-teal-50 border-teal-500 text-teal-800 shadow-xs ring-1 ring-teal-500/30"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <MessageSquare size={13} className={cn("shrink-0", field.value === "WhatsApp" ? "text-teal-600" : "")} />
                  <span className="truncate">WhatsApp</span>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={isSubmitting}
                  onClick={() => field.onChange("Phone")}
                  className={cn(
                    "h-9 sm:h-10 min-w-0 px-1 sm:px-2.5 rounded-[10px] border text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer transition-all",
                    field.value === "Phone"
                      ? "bg-indigo-50 border-indigo-500 text-indigo-900 shadow-xs ring-1 ring-indigo-500/30"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Phone size={13} className={cn("shrink-0", field.value === "Phone" ? "text-indigo-600" : "")} />
                  <span className="truncate">Phone</span>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={isSubmitting}
                  onClick={() => field.onChange("Email")}
                  className={cn(
                    "h-9 sm:h-10 min-w-0 px-1 sm:px-2.5 rounded-[10px] border text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer transition-all",
                    field.value === "Email"
                      ? "bg-blue-50 border-blue-500 text-blue-900 shadow-xs ring-1 ring-blue-500/30"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Mail size={13} className={cn("shrink-0", field.value === "Email" ? "text-blue-600" : "")} />
                  <span className="truncate">Email</span>
                </Button>
              </div>
              {errors.preferredContact && (
                <p className="text-xs text-destructive">{errors.preferredContact.message}</p>
              )}
            </div>
          )}
        />

        {/* Requirement Message via Controller */}
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextareaWithLabel
              id="inquiry-message"
              label="Inquiry / Requirement Details"
              rows={3}
              placeholder="Share specific details about what you need (e.g. batch timings, expected start date, quantity, questions)..."
              error={errors.message?.message}
              disabled={isSubmitting}
              {...field}
            />
          )}
        />
      </div>
    </Modal>
  );
}
