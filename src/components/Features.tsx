"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Shield, Globe, Cpu, Layers } from "lucide-react";

const features = [
  {
    title: "Deep Vision",
    description: "Multimodal AI that understands images, video, and spatial data with human-level accuracy.",
    icon: <Brain className="w-10 h-10 text-accent" />,
  },
  {
    title: "Instant Execution",
    description: "Low-latency inference engines designed for real-time mission critical applications.",
    icon: <Zap className="w-10 h-10 text-accent" />,
  },
  {
    title: "Secure by Design",
    description: "Privacy-first architecture ensuring your proprietary data never leaves your environment.",
    icon: <Shield className="w-10 h-10 text-accent" />,
  },
  {
    title: "Global Scale",
    description: "Distributed infrastructure providing high-availability across every continent.",
    icon: <Globe className="w-10 h-10 text-accent" />,
  },
  {
    title: "Neural Core",
    description: "Custom-trained LLMs optimized specifically for your industry's unique datasets.",
    icon: <Cpu className="w-10 h-10 text-accent" />,
  },
  {
    title: "Unified API",
    description: "Single integration point for every model, from computer vision to predictive analytics.",
    icon: <Layers className="w-10 h-10 text-accent" />,
  },
];

export const Features = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
          Smarter is Now Faster.
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
           Discover the core pillars of Hexa AI's revolutionary platform. 
           Engineered for scale and built for trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900 group-hover:text-accent transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
