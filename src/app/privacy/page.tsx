"use client";

import React, { useState } from "react";

const privacyContent = [
  {
    id: "personal-data",
    title: "Personal Data",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-tight text-[17px]">
          In order to better provide you with products and services offered, Hexa AI may ask you to provide certain personally identifiable information that can be used to contact or identify you ("Personal Data"). These may include, but not limited to:
        </p>
        <ul className="text-gray-600 leading-tight text-[17px]  list-inside space-y-2 mb-0">
          <li className="mb-0">Email address.</li>
          <li className="mb-0">First name and last name.</li>
          <li className="mb-0">Phone number.</li>
          <li className="mb-0">Address, State, Province, ZIP/Postal code, City.</li>
          <li className="mb-0">Cookies and Usage Data.</li>
        </ul>
        <p className="text-gray-600 leading-tight text-[17px]">
          We collect Personal Data that you provide directly (for example, when you sign up, contact us, or make a purchase), as well as certain data collected automatically such as Usage Data, cookies, and device information. We use this information for, but not limited to, communicating with you in relation to Services and/or products you have requested from us, and sending you newsletters, marketing or promotional materials, and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.
        </p>
        <p className="text-gray-600 leading-tight text-[17px]">
          AI Voice & Communications Data. If you enable voice features or connect telephony, we may receive audio, transcripts, call metadata, and interaction logs (&quot;Communications Data&quot;) for providing Services and improving safety. Customers are responsible for obtaining all required notices and consents before providing such data to Hexa AI. Hexa AI may use Communications Data in aggregated and de-identified form to improve, train, and enhance its models and Services, provided such use does not identify Customer or end users.
        </p>
        <p className="text-gray-600 leading-tight text-[17px]">
          We hereby confirm that we do not use Google Workspace APIs to develop, improve, or train generalized artificial intelligence (AI) and/or machine learning (ML) models, and we do not retain any data obtained via Google Workspace APIs for such purposes.
        </p>
        <p className="text-gray-600 leading-tight text-[17px]">
          Sensitive Personal Data. We do not seek to collect sensitive categories of data unless strictly necessary for the Services and expressly provided by you, and where required, with your explicit consent.
        </p>
      </div>
    ),
  },
  {
    id: "usage-data",
    title: "Usage Data",
    content: (
      <p className="text-gray-600 leading-tight text-[17px]">
        Usage Data is collected automatically when using the Service. It may include information such as your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
      </p>
    ),
  },
  {
    id: "location-data",
    title: "Location Data",
    content: (
      <p className="text-gray-600 leading-tight text-[17px]">
        We may use and store information about your location if you give us permission to do so. We use this data to provide features of our Service, to improve and customize our Service. You can enable or disable location services when you use our Service at any time through your device settings.
      </p>
    ),
  },
  {
    id: "tracking-cookies",
    title: "Tracking & Cookies Data",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-tight text-[17px]">
          We use cookies and similar tracking technologies to track the activity on our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
        </p>
        <p className="text-gray-600 leading-tight text-[17px]">
          Cookies can be "Persistent" or "Session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while Session cookies are deleted as soon as you close your web browser.
        </p>
      </div>
    ),
  },
  {
    id: "use-of-data",
    title: "Use of Data",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-tight text-[17px]">
          Hexa AI uses the collected data for various purposes:
        </p>
        <ul className="text-gray-600 leading-tight text-[17px] list-disc list-inside space-y-2">
          <li>To provide and maintain our Service.</li>
          <li>To notify you about changes to our Service.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information so that we can improve our Service.</li>
          <li>To monitor the usage of our Service.</li>
          <li>To detect, prevent and address technical issues.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "retention-of-data",
    title: "Retention of Data",
    content: (
      <p className="text-gray-600 leading-tight text-[17px]">
        The Company will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
      </p>
    ),
  },
  {
    id: "transfer-of-data",
    title: "Transfer of Data",
    content: (
      <p className="text-gray-600 leading-tight text-[17px]">
        Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
      </p>
    ),
  },
  {
    id: "disclosure-of-data",
    title: "Disclosure of Data",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-tight text-[17px]">
          Under certain circumstances, the Company may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
        </p>
        <p className="text-gray-600 leading-tight text-[17px]">
          We may also disclose your Personal Data in the good faith belief that such action is necessary to:
        </p>
        <ul className="text-gray-600 leading-tight text-[17px] list-disc list-inside space-y-2">
          <li>Comply with a legal obligation.</li>
          <li>Protect and defend the rights or property of the Company.</li>
          <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
          <li>Protect the personal safety of users of the Service or the public.</li>
          <li>Protect against legal liability.</li>
        </ul>
      </div>
    ),
  },
];

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState(privacyContent[0].id);

  const activeSection = privacyContent.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-white text-white relative flex flex-col  ">

      {/* Main Container */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 flex flex-col">

        {/* Header Section */}
        <div className="mb-16 max-w-4xl text-center mx-auto">
          <p className="text-gray-400 text-sm md:text-base font-medium mb-5 tracking-wide">
            Last Updated: January 1, 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[rgba(14,165,233,1)] to-[rgba(238,16,229,1)] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-500  tracking-wide text-sm md:text-base">
            How Hexa Ai handles your data
          </p>
        </div>

        {/* Content Section: Sidebar + Main Area */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start flex-1 min-h-[500px]">

          {/* Sidebar Navigation */}
          <div className="w-full md:w-90 shrink-0 sticky top-28 h-[450px] overflow-y-auto hide-scrollbar">
            <div className="flex flex-col gap-1 p-1">
              {privacyContent.map((tab) => (
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
          <div className="flex-1 w-full max-w-full md:max-w-[1300px] max-h-[1850px] md:max-h-[500px] relative overflow-hidden rounded-[32px] border border-[#00A3FF]/30 shadow-sm bg-white">

            {/* Content area */}
            <div className="relative z-10 p-8 pb-10 md:p-10 pr-6 h-[550px] overflow-y-auto custom-scrollbar flex flex-col">
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
