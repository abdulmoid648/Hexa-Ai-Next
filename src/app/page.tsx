"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    employees: "",
    useCase: "",
    implementation: "",
    agents: "",
    useCaseText: "",
    hearAbout: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#f5f7fa] text-gray-900" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24" suppressHydrationWarning>
        {/* CONNECT heading */}
        <h1 className="text-right text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight mb-20 select-none">
          <span className="bg-gradient-to-r from-[rgba(14,165,233,1)] to-[rgba(238,16,229,1)] bg-clip-text text-transparent">CONNECT</span>
        </h1>

        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-start" suppressHydrationWarning>
          {/* Left Side — Image Card */}
          <div className="w-full lg:w-[480px] shrink-0 flex justify-center lg:justify-start">
            <div className="relative w-[380px] sm:w-[450px]">
              {/* Main Card */}
              <div className="relative bg-gray-100 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Main Card Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden  ">
                  <Image
                    src="/Connect.png"
                    alt="Contact Us"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain translate-y-29 scale-x-[-1]"
                    priority
                  />
                </div>

                {/* Floating Badges */}
                {/* Integrations Badge */}
                <div className="absolute top-6 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-xl pl-2 pr-4 py-1.5 shadow-lg border border-gray-100">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={50}
                      height={50}
                      style={{ width: "auto", height: "auto" }}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base  text-gray-800">
                    Integrations
                  </span>
                </div>

                {/* Trusted Badge */}
                <div className="absolute top-[65%] lg:top-[55%] right-0 lg:right-4 flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-lg border border-gray-100">
                  <svg
                    className="w-6 h-6 text-[#10b981]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L3 5.5V11C3 16 7 20.5 12 23C17 20.5 21 16 21 11V5.5L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 4.5L5 7V11C5 14.8 7.8 18.2 12 20.2C16.2 18.2 19 14.8 19 11V7L12 4.5ZM10.5 15L6.5 11L7.9 9.6L10.5 12.2L16.1 6.6L17.5 8L10.5 15Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-base  text-gray-800 tracking-wide pr-1 t">
                    Trusted
                  </span>
                </div>

                {/* Responsive Assistant Badge */}
                <div className="absolute bottom-6 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-lg border border-gray-100">
                  <div className="relative w-10 h-10">
                    <span className="absolute left-0 top-1 text-yellow-400 text-xl">✦</span>
                    <span className="absolute left-5 top-0 text-yellow-400 text-2xl">✦</span>
                    <span className="absolute left-2 top-5 text-yellow-400 text-sm">✦</span>
                    <span className="absolute left-7 top-5 text-yellow-400 text-sm">✦</span>
                  </div>
                  <span className="text-base text-gray-800">
                    Responsive Assistant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="flex-1 w-full   ">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: First Name / Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  ml-0 lg:ml-20">
                <div>
                  <label
                    htmlFor="firstName"
                    className="contact-label"
                  >
                    First Name
                  </label>
                  <div className="bg-white rounded-xl lg:max-w-sm">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="contact-input"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="contact-label"
                  >
                    Last Name
                  </label>
                  <div className="bg-white rounded-xl lg:max-w-lg">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="contact-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email / Employees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ml-0 lg:ml-20">
                <div>
                  <label
                    htmlFor="email"
                    className="contact-label"
                  >
                    Email
                  </label>
                  <div className="bg-white rounded-xl lg:max-w-lg">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="janedoe@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="employees"
                    className="contact-label"
                  >
                    Number of employees work at your company?
                  </label>
                  <div className="bg-white rounded-xl lg:max-w-lg">
                    <input
                      id="employees"
                      name="employees"
                      type="text"
                      placeholder="1-10"
                      value={formData.employees}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Use Hexa AI / Implementation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ml-0 lg:ml-20">
                <div>
                  <label
                    htmlFor="useCase"
                    className="contact-label"
                  >
                    How do you want to use Hexa AI?
                  </label>
                  <div className="relative bg-white rounded-xl lg:max-w-lg">
                    <select
                      id="useCase"
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleChange}
                      className="contact-select"
                    >
                      <option value="">Select an option</option>
                      <option value="my-company">Use for my company</option>
                      <option value="clients">Use for my clients</option>
                      <option value="personal">Personal use</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="implementation"
                    className="contact-label"
                  >
                    How do you want to implement the solution?
                  </label>
                  <div className="relative bg-white rounded-xl lg:max-w-lg">
                    <select
                      id="implementation"
                      name="implementation"
                      value={formData.implementation}
                      onChange={handleChange}
                      className="contact-select"
                    >
                      <option value="">Select an option</option>
                      <option value="self">Self-setup with my developers</option>
                      <option value="assisted">Assisted setup</option>
                      <option value="managed">Fully managed</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Number of agents */}
              <div className="ml-0 lg:ml-20">
                <label
                  htmlFor="agents"
                  className="contact-label"
                >
                  Number of contact center agents in your company?
                </label>
                <div className="relative w-full lg:max-w-3xl bg-white rounded-xl">
                  <select
                    id="agents"
                    name="agents"
                    value={formData.agents}
                    onChange={handleChange}
                    className="contact-select"
                  >
                    <option value="">Select an option</option>
                    <option value="fewer-10">Fewer than 10</option>
                    <option value="10-50">10 - 50</option>
                    <option value="50-200">50 - 200</option>
                    <option value="200+">200+</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 5: Use case textarea */}
              <div className="ml-0 lg:ml-20">
                <label
                  htmlFor="useCaseText"
                  className="contact-label"
                >
                  What&apos;s your use case?
                </label>
                <div className="bg-white rounded-lg w-full lg:max-w-3xl h-20">
                  <textarea
                    id="useCaseText"
                    name="useCaseText"
                    rows={4}
                    placeholder="Write here..."
                    value={formData.useCaseText}
                    onChange={handleChange}
                    className="contact-input resize-none"
                  />
                </div>
              </div>

              {/* Row 6: How did you hear */}
              <div className="ml-0 lg:ml-20">
                <label
                  htmlFor="hearAbout"
                  className="contact-label"
                >
                  How did you hear about us?
                </label>
                <div className="relative w-full lg:max-w-3xl bg-white rounded-xl">
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="contact-select"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="blog">Blog / Article</option>
                    <option value="event">Event / Conference</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center lg:justify-end lg:ml-20 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center gap-2 bg-[rgba(14,165,233,1)] hover:bg-[#00aaee] text-white text-sm font-semibold rounded-xl px-12 py-3 transition-all duration-200 shadow-[0_4px_20px_rgba(0,194,255,0.3)] hover:shadow-[0_6px_30px_rgba(0,194,255,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  ) : submitted ? (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Submitted!
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
