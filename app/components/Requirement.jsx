"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Requirement() {
  // Floating shapes random positions
  const floatVariant = (x, y, duration = 8) => ({
    animate: {
      x: [0, x, 0],
      y: [0, y, 0],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  });

  return (
    <Section className="relative grid-bg overflow-hidden py-32">
      {/* Background floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-[#00f0ff]/20 rounded-full"
        {...floatVariant(50, 80, 12)}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-24 h-24 bg-[#00f0ff]/10 rounded-full"
        {...floatVariant(-60, 50, 15)}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-20 h-20 bg-[#00f0ff]/15 rounded-full"
        {...floatVariant(40, -60, 10)}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-12 h-12 bg-[#00f0ff]/25 rounded-full"
        {...floatVariant(-50, -70, 8)}
      />

      {/* Main Content */}
      <div className="relative text-center max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          className="text-5xl sm:text-6xl font-extrabold text-[#00f0ff] mb-6"
        >
          Own Laptop Needed
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl sm:text-2xl text-[#66f0ff]/80"
        >
          Students must have their own laptop to participate in live coding
          sessions, run projects, and fully leverage AI-enhanced learning tools.
        </motion.p>
      </div>

      {/* Glowing neon border effect */}
      <motion.div
        className="absolute inset-0 border-2 rounded-3xl border-[#00f0ff]/10 pointer-events-none animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </Section>
  );
}
