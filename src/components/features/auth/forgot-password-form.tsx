"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Loader2, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/common";
import {
  forgotPasswordFormSchema,
  type ForgotPasswordFormValues,
} from "@/schemas";
import { AuthCardContainer } from "./auth-card-container";

export function ForgotPasswordForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedEmail(data.email);
    setIsSuccess(true);
  };

  return (
    <AuthCardContainer maxWidth="max-w-lg">
      <div className="w-full space-y-6">
        {isSuccess ? (
          <div className="space-y-6 text-center py-2 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600 shadow-xs">
              <MailCheck size={32} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Check Your Email
              </h2>
              <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                We have sent password reset instructions to{" "}
                <span className="font-semibold text-slate-800">
                  {submittedEmail}
                </span>
                .
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Button
                type="button"
                onClick={() => setIsSuccess(false)}
                variant="outline"
                className="w-full h-12 rounded-[10px] border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm cursor-pointer"
              >
                Resend Link or Try Another Email
              </Button>

              <div className="pt-2">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors py-1"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Title & Subtitle */}
            <div className="space-y-1 text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Forgot Password
              </h1>
              <p className="text-sm text-slate-500">
                No worries! Enter your email and we&apos;ll send you a reset link.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputWithLabel
                    id="forgot-email"
                    type="email"
                    label="Email Address"
                    placeholder="name@example.com"
                    error={errors.email?.message}
                    disabled={isSubmitting}
                    {...field}
                  />
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-[10px] bg-[#5c67f2] hover:bg-[#4f59e0] text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending Reset Link...</span>
                  </>
                ) : (
                  <>
                    <span>Send Reset Link</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </Button>
            </form>

            {/* Back to Sign In Link */}
            <div className="pt-2 text-center text-xs sm:text-sm text-slate-500">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <ArrowLeft size={15} />
                <span>Back to Sign In</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </AuthCardContainer>
  );
}
