"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { InputWithLabel } from "@/components/common";
import { registerFormSchema, type RegisterFormValues } from "@/schemas";
import { AuthCardContainer } from "./auth-card-container";

export function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    // Simulate registration delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
    setTimeout(() => {
      router.push("/login");
    }, 1200);
  };

  return (
    <AuthCardContainer maxWidth="max-w-lg">
      <div className="w-full space-y-5">
        {/* Title & Subtitle */}
        <div className="space-y-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Create an Account
          </h1>
          <p className="text-sm text-slate-500">
            Enter your details below to get started.
          </p>
        </div>

        {/* Success Notification */}
        {isSuccess && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span>Account created successfully! Redirecting to login...</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5 text-left">
          {/* Full Name */}
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="register-fullname"
                label="Full Name"
                placeholder="e.g. Rahul Sharma"
                error={errors.fullName?.message}
                disabled={isSubmitting || isSuccess}
                {...field}
              />
            )}
          />

          {/* Email Address */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="register-email"
                type="email"
                label="Email Address"
                placeholder="name@example.com"
                error={errors.email?.message}
                disabled={isSubmitting || isSuccess}
                {...field}
              />
            )}
          />

          {/* Mobile Phone Number */}
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="register-phone"
                type="tel"
                label="Mobile Number"
                placeholder="98765 43210"
                error={errors.phone?.message}
                disabled={isSubmitting || isSuccess}
                {...field}
              />
            )}
          />

          {/* Password */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="register-password"
                type={showPassword ? "text" : "password"}
                label="Password"
                placeholder="Min 6 characters"
                error={errors.password?.message}
                disabled={isSubmitting || isSuccess}
                rightElement={
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                }
                {...field}
              />
            )}
          />

          {/* Confirm Password */}
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="register-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password"
                placeholder="Re-enter your password"
                error={errors.confirmPassword?.message}
                disabled={isSubmitting || isSuccess}
                rightElement={
                  <Button
                    variant="link"
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer transition-colors"
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                }
                {...field}
              />
            )}
          />

          {/* Terms Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <Controller
                name="terms"
                control={control}
                render={({ field: { value, onChange, ...field } }) => (
                  <input
                    type="checkbox"
                    checked={!!value}
                    onChange={(e) => onChange(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600 shrink-0"
                    {...field}
                  />
                )}
              />
              <span className="text-xs text-slate-600 leading-normal">
                I agree to the{" "}
                <Link href="/terms" target="_blank" className="font-bold text-indigo-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" target="_blank" className="font-bold text-indigo-600 hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
            {errors.terms && (
              <p className="text-xs font-semibold text-red-500 mt-1">
                {errors.terms.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full h-12 rounded-[10px] bg-[#5c67f2] hover:bg-[#4f59e0] text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Create Account</span>
                <ArrowRight size={16} />
              </>
            )}
          </Button>
        </form>

        {/* OR Divider */}
        <div className="relative my-5.75 flex items-center justify-center">
          <Separator className="w-full" />
          <span className="bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest absolute">
            OR
          </span>
        </div>

        {/* Google Quick Sign-Up */}
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            // Placeholder for Google OAuth
          }}
          className="w-full h-12 rounded-[10px] border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-medium text-sm flex items-center justify-center gap-3 shadow-2xs transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Sign up with Google</span>
        </Button>

        {/* Sign In Link */}
        <div className="pt-1 text-center text-xs sm:text-sm text-slate-500">
          <span>Already have an account? </span>
          <Link
            href="/login"
            className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
          >
            Sign in
          </Link>
        </div>
      </div>
    </AuthCardContainer>
  );
}
