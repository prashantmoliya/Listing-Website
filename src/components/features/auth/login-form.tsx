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
import { loginFormSchema, type LoginFormValues } from "@/schemas";
import { AuthCardContainer } from "./auth-card-container";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
    setTimeout(() => {
      router.push("/");
    }, 1200);
  };

  return (
    <AuthCardContainer maxWidth="max-w-lg">
      <div className="w-full space-y-6">
      {/* Title & Subtitle */}
      <div className="space-y-1 text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Sign In
        </h1>
        <p className="text-sm text-slate-500">
          Welcome back! Please enter your details.
        </p>
      </div>

      {/* Success Notification */}
      {isSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
          <span>Signed in successfully! Redirecting to home...</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputWithLabel
              id="login-email"
              type="email"
              label="Email Address"
              placeholder="name@example.com"
              error={errors.email?.message}
              disabled={isSubmitting || isSuccess}
              {...field}
            />
          )}
        />

        {/* Password Field with Show/Hide Toggle */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputWithLabel
              id="login-password"
              type={showPassword ? "text" : "password"}
              label={
                <div className="flex items-center justify-between w-full">
                  <span>Password</span>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
              }
              placeholder="Enter your password"
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

        {/* Remember Me Checkbox */}
        <div className="flex items-center justify-between pt-0.5">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field: { value, onChange, ...field } }) => (
                <input
                  type="checkbox"
                  checked={!!value}
                  onChange={(e) => onChange(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
                  {...field}
                />
              )}
            />
            <span className="text-xs font-medium text-slate-600">
              Remember me on this device
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className="w-full h-12 rounded-[10px] bg-[#5c67f2] hover:bg-[#4f59e0] text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 mt-1"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Signing In...</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
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

      {/* Google Quick Sign-In */}
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
        <span>Continue with Google</span>
      </Button>

      {/* Sign Up Link */}
      <div className="pt-1 text-center text-xs sm:text-sm text-slate-500">
        <span>Don&apos;t have an account? </span>
        <Link
          href="/register"
          className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
        >
          Sign up
        </Link>
        </div>
      </div>
    </AuthCardContainer>
  );
}
