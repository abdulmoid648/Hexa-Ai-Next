"use client";

import React, { useState } from "react";

const termsContent = [
  {
    id: "services",
    title: "Our Services",
    content: (
      <>
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed text-[17px]">
            <strong className="text-black font-medium">1.1 Cloud Service:</strong> Hexa AI is a Site that enables You to build call operation AI Agents. Our service includes a versatile API for anyone building an AI for voice interactions, number provisioning, call handling, and a dashboard for customization and integration, such as customer service, outbound sales calls, information gathering, and surveys.
          </p>
          <p className="text-gray-600 leading-relaxed text-[17px]">
            <strong className="text-black font-medium">1.2 Professional Services:</strong> Beyond the standard technical support, Hexa AI offers customized professional services which include personalized consultations, advanced implementation assistance, optimization strategies, and more, tailored to Your specific needs. Please contact us at https://hexa-ai.com/ with any questions or requests, and a member of our team will help You choose the Services and solutions that will be most suitable to meet Your needs.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "payment",
    title: "Payment Terms",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        Payment terms apply to all usage of Hexa AI services unless otherwise stated in a separate agreement. Usage is billed on a monthly cycle based on the API calls and duration of voice minutes used.
      </p>
    ),
  },
  {
    id: "responsibilities",
    title: "Customer Responsibilities",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        You are responsible for all activity occurring under your account and for complying with all applicable laws regarding the usage of automated voice services and AI agents in your jurisdiction.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use policy",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        You may not use our services to generate deceptive, harmful, illegal, or abusive content. We reserve the right to suspend any account found to be violating these terms immediately and without prior notice.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        You agree to defend, indemnify and hold harmless Hexa AI and its employees from any claims, damages, obligations, or losses arising from your use of and access to our platform.
      </p>
    ),
  },
  {
    id: "warranty",
    title: "Warranty Disclaimer",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The service is provided on an "AS IS" and "AS AVAILABLE" basis. Hexa AI makes no representations or warranties of any kind, whether express, implied or statutory.
      </p>
    ),
  },
  {
    id: "beta",
    title: "Beta, Evaluation & Trail Services",
    content: (
      <p className="text-gray-600 leading-relaxed text-[15px]">
        From time to time, we may invite you to try Beta services. These are provided for evaluation purposes and not for production use, are not supported, and may be subject to additional terms.
      </p>
    ),
  },
  {
    id: "high-risk",
    title: "High-Risk use Disclaimer",
    content: (
      <p className="text-gray-600 leading-relaxed text-[15px]">
        Hexa AI is not designed or intended for use in mission-critical operations such as emergency response services, life support systems, or where AI failure could result in death or personal injury.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        To the maximum extent permitted by applicable law, in no event shall Hexa AI or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, for loss of data or other information, for business interruption, for personal injury, etc.) arising out of or in any way related to the use of or inability to use the Service.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Call Recording and Third-Party Vendors",
    title: "Call Recording and Third-Party Vendors",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Service Levels",
    title: "Service Levels",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Data Security & Privacy",
    title: "Data Security & Privacy",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "DMCA Policy",
    title: "DMCA Policy",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Modifications to Terms",
    title: "Modifications to Terms",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Export Control",
    title: "Export Control",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Dispute Resolution",
    title: "Dispute Resolution",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Order of Precedence",
    title: "Order of Precedence",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Severability",
    title: "Severability",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Assignment",
    title: "Assignment",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Force Majeure",
    title: "Force Majeure",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Enforcement and Waiver",
    title: "Enforcement and Waiver ",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
  {
    id: "Contact Us",
    title: "Contact Us",
    content: (
      <p className="text-gray-600 leading-relaxed text-[17px]">
        The Site and its original content, features and functionality are and will remain the exclusive property of Hexa AI and its licensors. The Site is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hexa AI.
      </p>
    ),
  },
];

export default function TermsOfService() {
  const [activeTab, setActiveTab] = useState(termsContent[0].id);

  const activeSection = termsContent.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-white text-white relative flex flex-col  ">

      {/* Decorative gradient blur */}


      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 flex flex-col">
        {/* Header Section */}
        <div className="mb-16 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-medium  tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[rgba(14,165,233,1)] to-[rgba(238,16,229,1)] bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-medium mb-5 tracking-wide">
            Last Updated: January 1, 2026
          </p>

          <p className="text-gray-500 leading-relaxed text-[14px] sm:text-sm mb-4 max-w-5xl">
            These Terms of Service between Hexa AI. and you govern your use of the website and services. By using them, you accept these terms, including a binding class action and jury trial waiver. If you&apos;re using the services on behalf of a company, you confirm you have authority to agree to these terms. Violating the terms may lead to termination and legal action. Do not use the site if you disagree or if your jurisdiction doesn&apos;t honor these terms. Persons under 13 are not permitted to use the site.
          </p>
        </div>

        {/* Content Section: Sidebar + Main Area */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start flex-1 min-h-[500px]">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-90 shrink-0 sticky top-28 h-[450px] overflow-y-auto hide-scrollbar">
            <div className="flex flex-col gap-1 p-1">
              {termsContent.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-6 py-3.5 rounded-2xl text-[17px] font-medium transition-all whitespace-nowrap duration-300 ${activeTab === tab.id
                    ? "bg-white text-gray-900 shadow-[0_10px_25px_-5px_rgba(14,165,233,0.15)] ring-1 ring-sky-100/50 sticky top-0 z-10"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/80"
                    }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Pane */}
          <div className="flex-1 w-full max-w-6xl max-h-[1850px] md:max-h-[650px] relative">
            {/* Background container with softer Figma-style border */}
            <div className="absolute inset-0 bg-white border border-[#00A3FF]/30 rounded-[32px] pointer-events-none shadow-sm" />

            {/* Content area with large minimum height for consistent bottom space */}
            <div className="relative z-10 p-8 pb-40 md:p-10 min-h-[850px] md:min-h-[500px] flex flex-col">
              <h2 className="text-2xl font-semibold text-[#00A3FF] mb-8 shrink-0">
                {activeSection?.title}
              </h2>

              <div className="text-gray-700">
                <div className="prose max-w-none">
                  {activeSection?.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
