"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glows - Adjusted for light theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-accent-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="z-10 text-center px-4 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">
            Powered by Next-Gen Intelligence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-gray-900">
          The Future of AI is Hexagonal.
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Unlock unprecedented efficiency with Hexa AI—the only platform that 
          unifies vision, logic, and creative intelligence into a single seamless interface.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-gray-200"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border border-gray-200 bg-white text-gray-900"
          >
            Watch Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Visual Mockup - Updated for light theme */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20 w-full max-w-5xl mx-auto px-4"
      >
        <div className="bg-white aspect-video rounded-3xl border border-gray-100 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
          <div className="absolute top-4 left-6 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center justify-center h-full">
             <div className="text-gray-200 font-mono text-xl animate-pulse tracking-widest uppercase">
               System Initializing...
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
