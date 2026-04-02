import React from "react";
import JobDetailsHero from "./JobDetailsHero";
import JobContent from "./JobContent";

export default function JobDetailsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden font-sans">
      <JobDetailsHero />
      <JobContent />
    </main>
  );
}
