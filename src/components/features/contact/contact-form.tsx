"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import { InputWithLabel, SelectWithLabel, TextareaWithLabel } from "@/components/common";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormValues } from "@/schemas";

const subjectOptions = [
  { value: "General Inquiry", label: "General Inquiry" },
  { value: "Listing Support", label: "Listing Support" },
  { value: "Technical Issue", label: "Technical Issue" },
  { value: "Business Partnership", label: "Business Partnership" },
  { value: "Advertising & Sponsorship", label: "Advertising & Sponsorship" },
  { value: "Other", label: "Other" },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (_data: ContactFormValues) => {
    // Simulate network submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
        Send us a message
      </h2>

      {isSubmitted ? (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200/80 p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 size={26} />
          </div>
          <h3 className="text-lg font-bold text-emerald-900">
            Thank you for reaching out!
          </h3>
          <p className="text-emerald-700 text-sm max-w-md mx-auto leading-relaxed">
            Your message has been sent successfully. Our team will review your
            inquiry and get back to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <InputWithLabel
                  id="name"
                  label="Your Name"
                  placeholder="Rahul Sharma"
                  error={errors.name?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputWithLabel
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="rahul@email.com"
                  error={errors.email?.message}
                  {...field}
                />
              )}
            />
          </div>

          {/* Row 2: Subject Dropdown */}
          <Controller
            name="subject"
            control={control}
            render={({ field }) => (
              <SelectWithLabel
                id="subject"
                label="Subject"
                placeholder="Select a topic"
                value={field.value}
                onValueChange={field.onChange}
                options={subjectOptions}
                error={errors.subject?.message}
              />
            )}
          />

          {/* Row 3: Message */}
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextareaWithLabel
                id="message"
                label="Message"
                rows={5}
                placeholder="Describe your query in detail..."
                error={errors.message?.message}
                {...field}
              />
            )}
          />

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Send size={16} />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
