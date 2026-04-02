"use client";

import React from "react";
import CareersHero from "./CareersHero";
import CareersRoles from "./CareersRoles";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden font-sans">
      <CareersHero />
      <CareersRoles />
    </main>
  );
}
