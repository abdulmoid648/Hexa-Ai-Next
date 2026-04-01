"use client";

import React from "react";
import AboutHero from "./AboutHero";
import AboutResearch from "./AboutResearch";
import AboutJoinUs from "./AboutJoinUs";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden font-sans">
      <AboutHero />
      <AboutResearch />
      <AboutJoinUs />
    </main>
  );
}
