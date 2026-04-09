"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { apiPost } from "@/lib/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const res = await apiPost("/api/auth/forgot-password", { email });

    setIsLoading(false);

    if (res.success) {
      setEmailSent(true);
    } else {
      setError(res.error || "Something went wrong. Please try again.");
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
        className="absolute top-24 left-28 flex items-center gap-[0.35rem] text-sky-500 font-semibold text-[0.95rem] no-underline hover:opacity-80 transition-opacity z-20"
      >
        <span className="text-[1rem] md:-translate-y-0.5 -translate-y-0 ">«</span> Back
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
        {emailSent ? (
          /* ── Success State ── */
          <div className="flex flex-col items-center text-center">
            {/* Success Icon */}
            <div
              className="flex items-center justify-center w-20 h-20 rounded-full text-white mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(14,165,233,1) 0%, rgba(238,16,229,0.8) 100%)',
                boxShadow: '0 8px 16px rgba(14,165,233,0.2)',
              }}
            >
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Heading */}
            <h1
              className="text-[2rem] font-bold mb-2"
              style={{
                background: 'linear-gradient(90deg, rgba(14,165,233,1) 0%, rgba(238,16,229,1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Successfully
            </h1>

            {/* Subtext */}
            <p className="text-sm text-[rgba(51,51,51,1)]  max-w-[400px] mx-auto text-center leading-relaxed">
              An email has been sent to you which contains a link which will allow you to change your password
            </p>

            {/* Note */}
            <div className="text-xs text-gray-500 mt-6 flex flex-col items-center gap-1 ">
              <b className="text-gray-700 text-sm">Note:</b>
              <span className="text-sm">The link will be expired in 10 days</span>
            </div>

            {/* Reset Password Link Just included to see the Reset Password  Page not included in real design */}
            <Link
              href="/reset-password"
              className="mt-8 text-sky-500 font-semibold text-sm hover:underline transition-all"
            >
              Reset Password
            </Link>
          </div>
        ) : (
          /* ── Form State ── */
          <>
            {/* Heading */}
            <h1 className="text-[1.65rem] font-semibold text-gray-900 leading-tight tracking-tight mb-[1rem]">
              Forgot Password
            </h1>
            <p className="text-sm text-[rgba(51,51,51,1)] mb-7 max-w-[320px] mx-auto text-center   -ml-5">
              Enter the email address you used to register
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[1.15rem] mt-8">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-medium">
                  {error}
                </div>
              )}

              {/* Email */}
              <div className="flex flex-col gap-[0.35rem]">
                <div className="relative flex items-center border-[1.5px] border-sky-500 rounded-xl bg-white transition-all focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.1)]">
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
                    id="forgot-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 py-[0.7rem] px-[0.875rem] text-sm text-gray-800 bg-transparent border-none outline-none font-inherit"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center w-full h-[2.75rem] mt-4 px-6 text-[0.9rem] font-semibold text-white bg-gray-800 border-none rounded-xl cursor-pointer transition-all hover:bg-gray-900 hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:-translate-y-px active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isLoading}
                id="forgot-submit"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-[2.5px] border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
