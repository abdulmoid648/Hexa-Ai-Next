"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-accent-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="z-10 text-center px-4 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold tracking-wider uppercase text-white/60">
            Powered by Next-Gen Intelligence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-gradient">
          The Future of AI is Hexagonal.
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Unlock unprecedented efficiency with Hexa AI—the only platform that 
          unifies vision, logic, and creative intelligence into a single seamless interface.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-white/10"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border border-white/10 glass"
          >
            Watch Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Visual Mockup placeholder or decorative element */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20 w-full max-w-5xl mx-auto px-4"
      >
        <div className="glass aspect-video rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          <div className="absolute top-4 left-6 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex items-center justify-center h-full">
             <div className="text-white/20 font-mono text-xl animate-pulse tracking-widest uppercase">
               System Initializing...
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
