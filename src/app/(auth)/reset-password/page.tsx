"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import { Eye, EyeOff } from "lucide-react";
import { apiPost } from "@/lib/api";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!allValid) {
      setError("Please meet all password requirements");
      return;
    }

    if (!token) {
      setError("Reset token is missing. Please use the link sent to your email.");
      return;
    }

    setIsLoading(true);

    const res = await apiPost("/api/auth/reset-password", { token, password });

    if (res.success) {
      router.push("/login");
    } else {
      setError(res.error || "Failed to reset password. Please try again.");
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

      {/* Back Link */}
      <Link
        href="/login"
        className="absolute top-24 left-28 flex items-center gap-[0.35rem] text-sky-500 font-semibold text-[0.95rem] no-underline hover:opacity-80 transition-opacity z-20 max-lg:hidden"
      >
        <span className="text-[1rem] md:-translate-y-0.5 -translate-y-0">«</span> Back
      </Link>

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
          Change Password
        </h1>
        <p className="text-sm text-[rgba(51,51,51,1)] mb-7 max-w-[320px]">
          Enter a new password to access your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[1.15rem]">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-medium">
              {error}
            </div>
          )}

          {/* New Password */}
          <div className="flex flex-col gap-[0.35rem]">
            <label htmlFor="new-password" className="text-[0.8rem] font-medium text-gray-700 tracking-wide">
              New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center border-[1.5px] border-sky-500 rounded-xl bg-white transition-all focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.1)]">
              <input
                id="new-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your new password"
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

          {/* Confirm Password */}
          <div className="flex flex-col gap-[0.35rem]">
            <label htmlFor="confirm-password" className="text-[0.8rem] font-medium text-gray-700 tracking-wide">
              Confirm New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center border-[1.5px] border-sky-500 rounded-xl bg-white transition-all focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.1)]">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="flex-1 py-[0.7rem] px-[0.875rem] text-sm text-gray-800 bg-transparent border-none outline-none font-inherit placeholder:text-gray-400"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="flex items-center justify-center py-2 px-3 text-sky-500 bg-transparent border-none cursor-pointer hover:text-sky-600 transition-colors"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <Eye className="w-5 h-5" strokeWidth={2.5} fill="currentColor" />
                ) : (
                  <EyeOff className="w-5 h-5" strokeWidth={2.5} fill="currentColor" />
                )}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-full h-[2.75rem] mt-4 px-6 text-[0.9rem] font-semibold text-white bg-gray-800 border-none rounded-xl cursor-pointer transition-all hover:bg-gray-900 hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:-translate-y-px active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isLoading}
            id="reset-submit"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-[2.5px] border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Confirm"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
