"use client";

import React, { useState } from "react";
import Head from "next/head";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  // SVG for the Checkmark
  const CheckIcon = () => (
    <svg
      className="w-[18px] h-[18px] text-[#f5a623] shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <main
      className="min-h-screen pt-28 pb-32 px-4 sm:px-6 lg:px-8 bg-white relative"
      suppressHydrationWarning
    >
      {/* Background GIF */}
      <div className="absolute inset-0 w-full h-full bg-[url('/Rainbow-Gif.gif')] bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none"></div>
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10" suppressHydrationWarning>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-[32px] sm:text-[40px] font-semibold text-[#333333] mb-3">
            Plans & Pricing
          </h1>
          <p className="text-[15px] sm:text-[16px] text-gray-500 max-w-lg mx-auto leading-relaxed">
            Let&apos;s get started! Choose your Secure, Reliable and Comfortable plan
            which is Tailored on your needs.
          </p>
        </div>

        {/* Toggle (Monthly / Annually) */}
        <div className="flex justify-center mb-16">
          <div className="bg-white border border-gray-100 p-1.5 rounded-xl shadow-sm flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-200 ${!isAnnual
                ? "bg-[#2D2D2D] text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-200 ${isAnnual
                ? "bg-[#2D2D2D] text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 xl:gap-8 max-w-[1100px] mx-auto">

          {/* FREE TIER */}
          <div className="w-full lg:w-1/3 bg-white rounded-3xl border border-[#bce3fa] p-8 sm:p-10 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.02)] h-fit lg:my-auto">
            <h3 className="text-[18px] font-medium text-gray-800 mb-6">Free Tier</h3>

            <div className="text-center mb-10">
              <div className="text-[32px] font-semibold text-[#00A3FF] mb-1">
                $0.00<span className="text-[20px] font-medium">/Mon</span>
              </div>
              <div className="text-[11px] text-gray-400 font-medium">
                Exclusive of all taxes
              </div>
            </div>

            <div className="flex-grow">
              <h4 className="text-[14px] font-medium text-gray-800 mb-6">Features:</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Access to voice-base dating bots</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Limited number of voice generations</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Access to a limited library of pre-made voices</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Basic API access with limited rate</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Standard support and documentation</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-[#2D2D2D] hover:bg-black text-white text-[14px] font-medium py-3.5 rounded-full transition-all">
              Current plan
            </button>
            <p className="text-[11px] text-center text-gray-400 font-medium mt-4">
              30 days money back guarantee
            </p>
          </div>

          {/* PRO TIER (Emphasized) */}
          <div className="w-full lg:w-[35%] bg-white rounded-3xl border border-[#9dd4f8] shadow-[0_20px_50px_rgba(0,163,255,0.06)] p-8 sm:p-10 flex flex-col relative z-10 lg:-mx-2 lg:-my-4">
            <h3 className="text-[18px] font-medium text-gray-800 mb-6">Pro Tier</h3>

            <div className="text-center mb-10">
              <div className="text-[36px] font-semibold text-[#00A3FF] mb-1">
                ${isAnnual ? "80" : "100"}<span className="text-[22px] font-medium">/Mon</span>
              </div>
              <div className="text-[11px] text-gray-400 font-medium">
                Exclusive of all taxes
              </div>
            </div>

            <div className="flex-grow">
              <h4 className="text-[14px] font-medium text-gray-800 mb-6">Features:</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 text-[14px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Increased monthly voice generation</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Access to premium voices and customization options</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Priority support and faster response time</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Advanced analytics and usage reports</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Access to beta features and updates</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-[#2D2D2D] hover:bg-black text-white text-[14px] font-medium py-4 rounded-full shadow-lg transition-all">
              Buy Now
            </button>
            <p className="text-[12px] text-center text-gray-400 font-medium mt-4">
              30 days money back guarantee
            </p>
          </div>

          {/* CUSTOM TIER */}
          <div className="w-full lg:w-1/3 bg-white rounded-3xl border border-[#bce3fa] p-8 sm:p-10 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.02)] h-fit lg:my-auto">
            <h3 className="text-[18px] font-medium text-gray-800 mb-6">Custom</h3>

            <div className="text-center mb-10">
              <div className="text-[32px] font-semibold text-[#00A3FF] mb-1">
                ${isAnnual ? "640" : "800"}<span className="text-[20px] font-medium">/Mon</span>
              </div>
              <div className="text-[11px] text-gray-400 font-medium">
                Exclusive of all taxes
              </div>
            </div>

            <div className="flex-grow">
              <h4 className="text-[14px] font-medium text-gray-800 mb-6">Features:</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Fully customized voice solutions</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Unlimited or high-volume voice generation capacity</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Dedicated support team</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Data privacy and compliance solutions</span>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
                  <CheckIcon />
                  <span className="leading-snug">Custom branding and white-labeling options</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-[#2D2D2D] hover:bg-black text-white text-[14px] font-medium py-3.5 rounded-full transition-all">
              Buy Now
            </button>
            <p className="text-[11px] text-center text-gray-400 font-medium mt-4">
              30 days money back guarantee
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
