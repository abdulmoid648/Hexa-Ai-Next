"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";

import { Eye, EyeOff } from "lucide-react";
import { apiPost } from "@/lib/api";

export default function SignUpPage() {
  const router = useRouter();
  const clerk = useClerk();

  // Force reload when returning from OAuth via browser back button (bfcache)
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was restored from bfcache — event listeners are dead
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const handleSocialLogin = async (strategy: "oauth_google" | "oauth_apple") => {
    try {
      // Create a sign-in with the OAuth strategy directly
      // This returns the external verification redirect URL
      const si = await clerk.client.signIn.create({
        strategy,
        redirectUrl: window.location.origin + "/sso-callback",
        actionCompleteRedirectUrl: window.location.origin + "/landing",
      });

      // Get the OAuth provider URL from the response
      const redirectUrl = si.firstFactorVerification?.externalVerificationRedirectURL;
      
      if (redirectUrl) {
        // Manually redirect to the OAuth provider
        window.location.href = redirectUrl.toString();
      } else {
        setError("Could not get redirect URL. Please try again.");
      }
    } catch (err: any) {
      const errMsg = err?.errors?.[0]?.longMessage || err?.errors?.[0]?.message || err?.message || "";
      console.error("Social login error:", err);
      setError(errMsg || "Social login failed. Please try again.");
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      setEmailError("Email is required");
      setEmailSuccess(false);
    } else if (!emailRegex.test(value)) {
      setEmailError("Enter a valid email address");
      setEmailSuccess(false);
    } else {
      setEmailError("");
      setEmailSuccess(true);
    }
  };

  const validations = useMemo(() => ({
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    number: /[0-9]/.test(password),
  }), [password]);

  const allValid = Object.values(validations).every(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      setEmailSuccess(false);
      return;
    }

    setIsLoading(true);
    setError("");

    const res = await apiPost("/api/auth/register", { email, password });

    if (res.success) {
      router.push("/login");
    } else {
      setError(res.error || "Registration failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen p-6 overflow-hidden bg-white font-[Roboto,sans-serif]">
      {/* Logo */}
      <div className="absolute top-8 left-28 flex items-center gap-2 z-20 max-lg:hidden">
        <Image
          src="/logo.png"
          alt="Hexa AI"
          width={32}
          height={32}
          style={{ height: "32px", width: "auto" }}
        />
        <span className="text-[25px] font-medium text-gray-800 tracking-tight">Hexa AI</span>
      </div>

      {/* Decorative blur blobs */}
      <div
        className="absolute -top-[100px] right-[50px] w-[400px] h-[400px] rounded-full blur-[60px] pointer-events-none z-0 max-lg:hidden"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[50px] -right-[100px] w-[350px] h-[350px] rounded-full blur-[60px] pointer-events-none z-0 max-lg:hidden"
        style={{ background: 'radial-gradient(circle, rgba(238,16,229,0.2) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[50px] -left-[100px] w-[350px] h-[350px] rounded-full blur-[60px] pointer-events-none z-0 max-lg:hidden"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-[100px] left-[50px] w-[400px] h-[400px] rounded-full blur-[60px] pointer-events-none z-0 max-lg:hidden"
        style={{ background: 'radial-gradient(circle, rgba(238,16,229,0.25) 0%, transparent 70%)' }}
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-[440px] px-10 pt-10 pb-8 mt-20 animate-[authCardAppear_0.6s_cubic-bezier(0.16,1,0.3,1)_both]">
        {/* Heading */}
        <h1 className="text-[1.65rem] font-semibold text-gray-900 leading-tight tracking-tight mb-[0.35rem]">
          Create an Account
        </h1>
        <p className="text-sm text-[rgba(51,51,51,1)] mb-7 max-w-[320px] mx-auto -translate-x-0 md:-translate-x-4">
          Sign up to use Hexa AI portal
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[1.15rem]">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-medium">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-[0.35rem]">
            <label htmlFor="signup-email" className="text-[0.8rem] font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <div className={`relative flex items-center border-[1.5px] rounded-xl bg-white transition-all ${emailError ? "border-red-500 focus-within:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]" : emailSuccess ? "border-green-500 focus-within:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]" : "border-sky-500 focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.1)]"}`}>
              <svg
                className="w-[1.15rem] h-[1.15rem] ml-[0.875rem] text-gray-400 shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 6.667L8.693 10.51c.404.252.606.378.824.427a1.5 1.5 0 0 0 .966 0c.218-.05.42-.175.824-.427L17.5 6.667M5.667 16.5h8.666c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092c.272-.535.272-1.235.272-2.635V7.5c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093c-.535-.272-1.235-.272-2.635-.272H5.667c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C1.667 5.4 1.667 6.1 1.667 7.5v5c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092c.535.273 1.235.273 2.635.273Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="signup-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="flex-1 py-[0.7rem] px-[0.875rem] text-sm text-gray-800 bg-transparent border-none outline-none font-inherit placeholder:text-gray-400"
                required
                autoComplete="email"
              />
            </div>
            {emailError && (
              <p className="text-[0.8rem] text-red-500 font-medium ml-1">
                {emailError}
              </p>
            )}
            {emailSuccess && !emailError && (
              <p className="text-[0.8rem] text-green-500 font-medium ml-1">
                Looks good!
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[0.35rem]">
            <label htmlFor="signup-password" className="text-[0.8rem] font-medium text-gray-700 tracking-wide">
              Password
            </label>
            <div className="relative flex items-center border-[1.5px] border-sky-500 rounded-xl bg-white transition-all focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.1)]">
              <svg
                className="w-[1.15rem] h-[1.15rem] ml-[0.875rem] text-gray-400 shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.167 8.333V6.667a4.167 4.167 0 1 0-8.334 0v1.666M10 12.083v1.667M6.833 16.5h6.334c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-.833c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093c-.535-.272-1.235-.272-2.635-.272H6.833c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.092 1.093c-.273.535-.273 1.235-.273 2.635v.833c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.092c.535.273 1.235.273 2.635.273Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 py-[0.7rem] px-[0.875rem] text-sm text-gray-800 bg-transparent border-none outline-none font-inherit placeholder:text-gray-400"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center justify-center py-2 px-3 text-sky-500 bg-transparent border-none cursor-pointer hover:text-sky-600 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <Eye className="w-5 h-5" strokeWidth={2.5} fill="currentColor" />
                ) : (
                  <EyeOff className="w-5 h-5" strokeWidth={2.5} fill="currentColor" />
                )}
              </button>
            </div>
          </div>

          {/* Password Requirements — only shown once user starts typing */}
          {password.length > 0 && (
            <ul className="flex flex-col gap-[0.3rem] text-[0.8rem] list-none pl-0 mt-1">
              <li className="flex items-center gap-2">
                <span className={`w-[6px] h-[6px] rounded-full ${validations.minLength ? 'bg-sky-500' : 'bg-gray-300'}`} />
                <span className={validations.minLength ? 'text-gray-800 font-medium' : 'text-gray-400'}>Minimum characters 8</span>
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-[6px] h-[6px] rounded-full ${validations.uppercase ? 'bg-sky-500' : 'bg-gray-300'}`} />
                <span className={validations.uppercase ? 'text-gray-800 font-medium' : 'text-gray-400'}>One uppercase character</span>
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-[6px] h-[6px] rounded-full ${validations.lowercase ? 'bg-sky-500' : 'bg-gray-300'}`} />
                <span className={validations.lowercase ? 'text-gray-800 font-medium' : 'text-gray-400'}>One lowercase character</span>
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-[6px] h-[6px] rounded-full ${validations.special ? 'bg-sky-500' : 'bg-gray-300'}`} />
                <span className={validations.special ? 'text-gray-800 font-medium' : 'text-gray-400'}>One special character</span>
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-[6px] h-[6px] rounded-full ${validations.number ? 'bg-sky-500' : 'bg-gray-300'}`} />
                <span className={validations.number ? 'text-gray-800 font-medium' : 'text-gray-400'}>One number</span>
              </li>
            </ul>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-full h-[2.75rem] mt-[0.35rem] px-6 text-[0.9rem] font-semibold text-white bg-gray-800 border-none rounded-xl cursor-pointer transition-all hover:bg-gray-900 hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:-translate-y-px active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isLoading || !allValid}
            id="signup-submit"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-[2.5px] border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[rgba(217,217,217,1)]" />
          <span className="text-[0.8rem] text-[rgba(51,51,51,1)] font-medium">OR</span>
          <div className="flex-1 h-px bg-[rgba(217,217,217,1)]" />
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-[0.65rem]">
          <button
            type="button"
            className="flex items-center justify-center gap-[0.6rem] w-full h-[2.65rem] px-4 text-[0.85rem] font-medium text-gray-700 bg-white border-[1.5px] border-sky-500 rounded-xl cursor-pointer transition-all hover:bg-gray-50 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            id="signup-google"
            onClick={() => handleSocialLogin("oauth_google")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335" />
            </svg>
            <span>Continue with Google</span>
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-[0.6rem] w-full h-[2.65rem] px-4 text-[0.85rem] font-medium text-gray-700 bg-white border-[1.5px] border-sky-500 rounded-xl cursor-pointer transition-all hover:bg-gray-50 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            id="signup-apple"
            onClick={() => handleSocialLogin("oauth_apple")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
            </svg>
            <span>Continue with Apple</span>
          </button>
        </div>

        {/* Footer link */}
        <p className="text-center text-[0.8rem] text-gray-500 mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-sky-500 font-semibold no-underline hover:text-sky-600 hover:underline transition-colors">
            Sign In
          </Link>
        </p>
        <div id="clerk-captcha" />
      </div>
    </div>
  );
}
