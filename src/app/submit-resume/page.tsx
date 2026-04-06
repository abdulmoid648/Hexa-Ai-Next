"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function SubmitResumePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset logic could go here
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-24 pt-12" suppressHydrationWarning>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12" suppressHydrationWarning>

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-3 text-[10px] sm:text-[14px]  md:text-[18px] font-medium  mb-4 md:mb-24 select-none mt-10" suppressHydrationWarning>
          <Link href="/careers" className="text-gray-400 hover:text-gray-600 transition-colors">
            Careers
          </Link>
          <span className="text-gray-300">→</span>
          {!submitted ? (
            <>
              <span className="bg-gradient-to-r from-[rgba(14,165,233,1)] to-[rgba(238,16,229,1)]  font-medium bg-clip-text text-transparent">
                Send your resume
              </span>
              <span className="text-gray-400">→</span>
              <span className="text-gray-400">Submitted</span>
            </>
          ) : (
            <>
              <span className="text-gray-400">Send your resume</span>
              <span className="text-gray-300">→</span>
              <span className="bg-gradient-to-r from-[rgba(14,165,233,1)] to-[rgba(238,16,229,1)] font-medium bg-clip-text text-transparent">
                Submitted
              </span>
            </>
          )}
        </nav>

        {/* Content Layout */}
        {!submitted ? (
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24" suppressHydrationWarning>

            {/* Left Side: Heading */}
            <div className="lg:w-1/2 pt-4">
              <h1 className="text-[25px] sm:text-3xl lg:text-5xl font-medium leading-[1.1] text-[#333333] tracking-tight">
                Invest in your Career,
                Grow with Hexa Ai
              </h1>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-[520px]">
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Row 1: Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-[13px] font-medium text-gray-500 mb-2 ml-1">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#F0F0F0] rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-cyan-200 shadow-[0_8px_20px_-8px_rgba(34,211,238,0.2)] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[13px] font-medium text-gray-500 mb-2 ml-1">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Deo"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#F0F0F0] rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-cyan-200 shadow-[0_8px_20px_-8px_rgba(34,211,238,0.2)] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-medium text-gray-500 mb-2 ml-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="johndao@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#F0F0F0] rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-cyan-200 shadow-[0_8px_20px_-8px_rgba(34,211,238,0.2)] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-medium text-gray-500 mb-2 ml-1">
                      Telephone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+92 xxx xxxxxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#F0F0F0] rounded-xl px-4 py-3.5 text-[15px] text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-cyan-200 shadow-[0_8px_20px_-8px_rgba(34,211,238,0.2)] transition-all"
                    />
                  </div>
                </div>

                {/* Resume Upload Link Area */}
                <div className="flex items-center gap-8 pt-2">
                  <div className="relative cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <span className="text-[#38bdf8] text-[17px] font-medium underline underline-offset-4 decoration-1">
                      Upload Resume
                    </span>
                  </div>

                  {fileName && (
                    <div className="flex items-center gap-3 animate-in fade-in duration-300 ml-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      <span className="text-[#34d399] text-[17px] font-medium whitespace-nowrap">
                        Resume uploaded
                      </span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-6 flex justify-center sm:justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-[280px] bg-[#333333] hover:bg-black text-white text-[16px] font-medium rounded-[14px] py-4 transition-all duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        ) : (
          <div className="flex justify-center mt-6 w-full animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-[url('/Rainbow.gif')] bg-cover bg-center bg-no-repeat rounded-[24px] w-full max-w-4xl flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden py-24">
              {/* White Overlay */}
              <div className="absolute inset-0 bg-white/93 backdrop-blur-[1px]"></div>

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-6 text-gray-500">
                  {/* Document Icon */}
                  <svg width="54" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="8" y1="13" x2="16" y2="13"></line>
                    <line x1="8" y1="17" x2="16" y2="17"></line>
                    <line x1="8" y1="9" x2="10" y2="9"></line>
                  </svg>
                  {/* Green Badge */}
                  <div className="absolute -bottom-1 -right-2 bg-white rounded-full p-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#34d399" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-[22px] font-medium text-[#333333] leading-relaxed">
                  <span className="sm:hidden">Resume Submitted <br /> Successfully</span>
                  <span className="hidden sm:block">Application Submitted <br /> Successfully</span>
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
