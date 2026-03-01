"use client";

import Link from "next/link";
import Section from "./Section";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <Section className="relative bg-gradient-to-r from-[#0a0a0a] via-[#001f2e] to-[#0a0a0a] py-28 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute w-32 h-32 bg-[#00f0ff]/20 rounded-full top-10 left-10"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute w-48 h-48 bg-[#ff4f9d]/10 rounded-full bottom-20 right-20"
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Launch Your Web Development Career Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-[#66f0ff]/80 mb-8"
        >
          Join our full-stack web development course with AI-powered tools, real
          projects, and live mentorship. Get job-ready in 3 months.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/pricing"
            className="inline-block px-10 py-4 text-lg md:text-xl font-bold text-white rounded-full bg-gradient-to-r from-[#00f0ff] via-[#4f00ff] to-[#ff4f9d] shadow-xl hover:shadow-[0_0_40px_#00f0ff]/50 transition-all duration-300"
          >
            Enroll Now
          </Link>
        </motion.div>

        {/* Social proof / urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-[#66f0ff]/80"
        >
          <span>🔥 150+ Students Enrolled</span>
          <span>⏱️ 3 Months Intensive Training</span>
          <span>💻 Real Portfolio Projects</span>
        </motion.div>
      </div>
    </Section>
  );
}
