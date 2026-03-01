"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "Pricing", path: "/pricing" },
    { name: "Instructor", path: "/instructor" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-full mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-[#00f0ff] via-[#00d4ff] to-[#00b8ff] bg-clip-text text-transparent">
            WebDev 1.0
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              <Link
                href={link.path}
                className={`transition ${
                  pathname === link.path
                    ? "text-[#00f0ff]"
                    : "text-gray-300 hover:text-[#00f0ff]"
                }`}
              >
                {link.name}
              </Link>

              {/* Animated underline */}
              <motion.span
                layoutId="underline"
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#00f0ff] ${
                  pathname === link.path ? "w-full" : "w-0"
                } group-hover:w-full transition-all duration-300`}
              />
            </div>
          ))}

          {/* CTA Button */}
          <Link href="/payment">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f0ff" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00f0ff] text-[#0a0a0a] px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
            >
              Enroll Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-6 space-y-4 text-gray-300"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`block ${
                  pathname === link.path
                    ? "text-[#00f0ff]"
                    : "hover:text-[#00f0ff]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/payment" onClick={() => setOpen(false)}>
              <button className="bg-[#00f0ff] w-full text-[#0a0a0a] font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-xl transition-all duration-300 mt-2">
                Enroll Now
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
