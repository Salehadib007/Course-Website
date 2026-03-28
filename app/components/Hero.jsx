"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 60 },
    }),
  };

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

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
    <section className="relative bg-[#0a0a0a] overflow-hidden h-[95vh]">
      {/* Floating shapes */}
      <motion.div
        className="absolute top-10 left-20 w-16 h-16 bg-[#00f0ff]/20 rounded-full"
        {...floatVariant(40, 60, 12)}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-24 h-24 bg-[#00f0ff]/10 rounded-full"
        {...floatVariant(-60, 80, 15)}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-20 h-20 bg-[#00f0ff]/15 rounded-full"
        {...floatVariant(70, -50, 10)}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-12 h-12 bg-[#00f0ff]/25 rounded-full"
        {...floatVariant(-50, -70, 8)}
      />

      {/* Main container */}
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10 items-center h-full">
        {/* LEFT */}
        <div>
          <motion.span
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-block bg-[#001f2e] text-[#00f0ff] font-semibold text-xs sm:text-sm tracking-wider uppercase px-3 py-1.5 rounded-full mb-3"
          >
            ওয়েব ডেভেলপমেন্ট
          </motion.span>

          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-[#00f0ff] tracking-wide"
          >
            গোপালগঞ্জে সর্বোচ্চ মানের <br /> Web Development কোর্স
          </motion.h1>

          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 sm:mt-5 text-sm sm:text-base text-[#a0f0ff] max-w-lg"
          >
            ডিজিটাল স্কিলের নামে বেসিক কম্পিউটারের কোর্স করতে করতে বিরক্ত? আমরা
            তৈরি করেছি সকল বয়সের মানুষের জন্য ৩ মাস ও ৬ মাসের জিরো টু হিরো
            কোর্স। কোর্স শেষেই ওয়েব জগতের এক্সপার্ট হয়ে উঠুন।
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 sm:mt-5 font-bold text-lg sm:text-xl text-[#a0f0ff] max-w-lg"
          >
            যোগাযোগঃ ০১৯৬২০৩৩৪০৫ / ০১৫৭২৯১২৭৮৯
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-6 flex gap-4 flex-wrap"
          >
            <Link
              href="/pricing"
              className="bg-[#00f0ff] text-[#0a0a0a] font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-base"
            >
              এনরোল করুন
            </Link>
            <Link
              href="/course"
              className="border border-[#00f0ff] text-[#00f0ff] font-semibold px-6 py-3 rounded-lg hover:bg-[#00f0ff] hover:text-[#0a0a0a] hover:scale-105 transition-all duration-300 text-base"
            >
              কারিকুলাম দেখুন
            </Link>
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-8 flex flex-wrap gap-8"
          >
            <div className="flex flex-col items-start">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00f0ff]">
                ৩৭ +
              </h3>
              <p className="text-[#66f0ff] text-sm">এনরোল করেছে</p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00f0ff]">
                ৩ মাস
              </h3>
              <p className="text-[#66f0ff] text-sm">সম্পূর্ণ ট্রেনিং</p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00f0ff]">
                ১০ +
              </h3>
              <p className="text-[#66f0ff] text-sm">জব প্রজেক্ট</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex justify-center relative"
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-square rounded-xl overflow-hidden shadow-2xl ring-2 ring-[#00f0ff]/50 hover:scale-105 transition-transform duration-500">
            <Image
              src="/course.png"
              alt="Full Stack AI Development"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Mouse follower */}
      <div
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
        }}
        className="pointer-events-none fixed w-6 h-6 rounded-full border-2 border-[#00f0ff] mix-blend-luminosity transition-transform duration-100"
      />
    </section>
  );
}
