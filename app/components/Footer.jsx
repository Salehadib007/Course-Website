"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white py-12 px-6 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute w-48 h-48 bg-[#00f0ff]/20 rounded-full top-0 left-10 animate-ping-slow"></div>
      <div className="absolute w-36 h-36 bg-[#ff4f9d]/20 rounded-full bottom-0 right-10 animate-ping-slow"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 items-start md:items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl md:text-2xl text-[#00f0ff]">
            ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট কোর্স
          </p>
          <p className="text-sm md:text-base text-[#66f0ff]/80">
            কপিরাইট © {new Date().getFullYear()} Saleh Adib Hasnat
          </p>
          <p className="text-sm md:text-base text-[#66f0ff]/80 mt-2 md:mt-0">
            ডিজাইনার এবং ডেভেলপার সালেহ আদিব হাসনাত
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col md:items-end gap-3">
          {/* Contact */}
          <div className="flex flex-col gap-1 text-right">
            <p className="text-sm md:text-base text-[#66f0ff]/80">
              WhatsApp:{" "}
              <a
                href="https://wa.me/01317136420"
                target="_blank"
                className="text-[#00f0ff] hover:text-[#4f00ff] transition-colors"
              >
                01317136420
              </a>
            </p>
            <p className="text-sm md:text-base text-[#66f0ff]/80 flex items-center justify-end gap-1">
              <FiGlobe className="text-[#00f0ff]" />{" "}
              <a
                href="https://saleh-d-adib.vercel.app"
                target="_blank"
                className="text-[#00f0ff] hover:text-[#4f00ff] transition-colors"
              >
                ইনস্ট্রাক্টর ওয়েবসাইট
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-2">
            <Link
              href="https://www.facebook.com/God.D.Adib"
              target="_blank"
              className="p-3 rounded-full bg-[#3b5998] hover:bg-[#00f0ff] transition-colors shadow-lg"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.linkedin.com/in/saleh-adib-hasnat-43a1792b9/"
              target="_blank"
              className="p-3 rounded-full bg-[#0a66c2] hover:bg-[#00f0ff] transition-colors shadow-lg"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://wa.me/01317136420"
              target="_blank"
              className="p-3 rounded-full bg-[#25D366] hover:bg-[#00f0ff] transition-colors shadow-lg"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        .animate-ping-slow {
          animation: ping 6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </footer>
  );
}
