"use client";

import Section from "../components/Section";
import { motion } from "framer-motion";

// Course data
const courses = [
  {
    title: "ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট (৩ মাস)",
    modules: [
      {
        title: "মডিউল ১: HTML & CSS মূল ধারণা (সপ্তাহ ১–২)",
        topics: [
          "ওয়েব ডেভেলপমেন্ট এবং ওয়েব ইকোসিস্টেমের পরিচয়",
          "HTML5: স্ট্রাকচার, সিম্যান্টিক ট্যাগ, ফর্ম, মাল্টিমিডিয়া",
          "CSS3: সিলেক্টর, বক্স মডেল, পজিশনিং, ফ্লেক্সবক্স, গ্রিড",
          "রেসপন্সিভ ডিজাইন: মিডিয়া কুয়েরি, মোবাইল-ফার্স্ট অ্যাপ্রোচ",
          "প্রজেক্ট: পার্সোনাল পোর্টফোলিও ল্যান্ডিং পেজ",
        ],
      },
      {
        title: "মডিউল ২: অ্যাডভান্সড CSS & UI ডিজাইন (সপ্তাহ ৩–৪)",
        topics: [
          "CSS অ্যানিমেশন এবং ট্রানজিশন",
          "CSS প্রিপ্রসেসর: SASS/SCSS মূল বিষয়",
          "Bootstrap & Tailwind CSS ফ্রেমওয়ার্ক",
          "ডিজাইন নীতি: টাইপোগ্রাফি, রঙ, লেআউট, এক্সেসিবিলিটি",
          "প্রজেক্ট: রেসপন্সিভ মাল্টি-সেকশন ওয়েবসাইট",
        ],
      },
      {
        title: "মডিউল ৩: জাভাস্ক্রিপ্ট মূল বিষয় (সপ্তাহ ৫–৬)",
        topics: [
          "JavaScript সিনট্যাক্স, ভ্যারিয়েবল, ডেটা টাইপ, অপারেটর",
          "DOM ম্যানিপুলেশন এবং ইভেন্ট হ্যান্ডলিং",
          "ফাংশন, অ্যারে, অবজেক্ট, লুপ, এবং কন্ডিশন",
          "ES6+ ফিচার: Let/Const, অ্যারো ফাংশন, মডিউল",
          "প্রজেক্ট: ইন্টারেক্টিভ টু-ডু লিস্ট অ্যাপ",
        ],
      },
      {
        title: "মডিউল ৪: অ্যাডভান্সড জাভাস্ক্রিপ্ট & API (সপ্তাহ ৭–৮)",
        topics: [
          "JavaScript অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং: কলব্যাক, প্রমিস, অ্যাসিঙ্ক/অ্যাওয়েট",
          "Fetch API & REST API ইন্টিগ্রেশন",
          "লোকাল স্টোরেজ & সেশন স্টোরেজ",
          "ফর্ম ভ্যালিডেশন & ইভেন্ট ডেলিগেশন",
          "প্রজেক্ট: পাবলিক API ব্যবহার করে ওয়েদার অ্যাপ",
        ],
      },
      {
        title: "মডিউল ৫: ফ্রন্টএন্ড ফ্রেমওয়ার্ক (সপ্তাহ ৯–১১)",
        topics: [
          "React.js (বা Vue.js) পরিচয়",
          "কম্পোনেন্ট, প্রপস, স্টেট ম্যানেজমেন্ট",
          "React Router, ইভেন্ট হ্যান্ডলিং, লাইফসাইকেল মেথড",
          "প্রজেক্ট: ব্লগ বা ই-কমার্স প্রোডাক্ট পেজ",
        ],
      },
      {
        title: "মডিউল ৬: চূড়ান্ত প্রজেক্ট & ডিপ্লয়মেন্ট (সপ্তাহ ১২)",
        topics: [
          "ক্যাপস্টোন প্রজেক্ট: সম্পূর্ণ মাল্টি-পেজ রেসপন্সিভ ওয়েবসাইট",
          "হোস্টিং: Netlify, Vercel, বা GitHub Pages",
          "কোড রিভিউ & সেরা প্র্যাকটিস",
        ],
      },
    ],
  },
  {
    title: "ব্যাকএন্ড ওয়েব ডেভেলপমেন্ট (৩ মাস)",
    modules: [
      {
        title: "মডিউল ১: Node.js & Express মূল বিষয় (সপ্তাহ ১–২)",
        topics: [
          "Node.js এবং ব্যাকএন্ড ধারণার পরিচয়",
          "NPM & প্যাকেজ ম্যানেজমেন্ট",
          "Express.js রাউটিং, মিডলওয়্যার, এবং এরর হ্যান্ডলিং",
          "প্রজেক্ট: CRUD অপারেশন সহ সিম্পল REST API",
        ],
      },
      {
        title: "মডিউল ২: ডেটাবেস ইন্টিগ্রেশন (সপ্তাহ ৩–৪)",
        topics: [
          "ডেটাবেস পরিচয়: SQL বনাম NoSQL",
          "MongoDB & Mongoose মূল বিষয়",
          "CRUD অপারেশন, স্কিমা, এবং ডেটা মডেলিং",
          "প্রজেক্ট: ইউজার ম্যানেজমেন্ট API",
        ],
      },
      {
        title: "মডিউল ৩: অথেন্টিকেশন & সিকিউরিটি (সপ্তাহ ৫–৬)",
        topics: [
          "JWT অথেন্টিকেশন & অথরাইজেশন",
          "পাসওয়ার্ড হ্যাশিং (bcrypt)",
          "রোল-বেসড এক্সেস কন্ট্রোল",
          "ইনপুট ভ্যালিডেশন & স্যানিটাইজেশন",
          "প্রজেক্ট: সিকিউর লগইন/রেজিস্টার API",
        ],
      },
      {
        title: "মডিউল ৪: RESTful & GraphQL API (সপ্তাহ ৭–৮)",
        topics: [
          "REST API সেরা প্র্যাকটিস",
          "API ভার্সনিং & পেজিনেশন",
          "GraphQL পরিচয়",
          "প্রজেক্ট: Postman দিয়ে REST API টেস্টিং",
        ],
      },
      {
        title: "মডিউল ৫: অ্যাডভান্সড ব্যাকএন্ড ফিচার (সপ্তাহ ৯–১০)",
        topics: [
          "ফাইল আপলোড & ক্লাউড স্টোরেজ (যেমন: Cloudinary, AWS S3)",
          "ইমেইল সার্ভিস ইন্টিগ্রেশন (Nodemailer)",
          "লগিং, এরর মনিটরিং, এবং ডিবাগিং",
          "প্রজেক্ট: ইমেইল নোটিফিকেশন সহ ফাইল আপলোড API",
        ],
      },
      {
        title: "মডিউল ৬: ডিপ্লয়মেন্ট & ক্যাপস্টোন প্রজেক্ট (সপ্তাহ ১১–১২)",
        topics: [
          "হোস্টিং: Heroku, Render, বা AWS মূল বিষয়",
          "এনভায়রনমেন্ট ভ্যারিয়েবল & কনফিগারেশন",
          "ক্যাপস্টোন প্রজেক্ট: ওয়েব অ্যাপ্লিকেশনের জন্য সম্পূর্ণ REST API ব্যাকএন্ড",
        ],
      },
    ],
  },
  {
    title: "ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট (৬ মাস)",
    modules: [
      {
        title: "মডিউল ১: HTML, CSS & JavaScript রিভিউ (সপ্তাহ ১–৩)",
        topics: [
          "রেসপন্সিভ ডিজাইন, ফ্লেক্সবক্স, গ্রিড",
          "ES6+ ফিচার & DOM ম্যানিপুলেশন",
          "প্রজেক্ট: ইন্টারেক্টিভ ল্যান্ডিং পেজ",
        ],
      },
      {
        title: "মডিউল ২: অ্যাডভান্সড ফ্রন্টএন্ড ফ্রেমওয়ার্ক (সপ্তাহ ৪–৬)",
        topics: [
          "React.js মূল বিষয়: কম্পোনেন্ট, প্রপস, স্টেট",
          "React Hooks, Context API",
          "React Router, Axios & API ইন্টিগ্রেশন",
          "প্রজেক্ট: টু-ডু বা ই-কমার্স ফ্রন্টএন্ড",
        ],
      },
      {
        title: "মডিউল ৩: ব্যাকএন্ড মূল বিষয় (সপ্তাহ ৭–৯)",
        topics: [
          "Node.js & Express.js মূল বিষয়",
          "REST API ডিজাইন & CRUD অপারেশন",
          "MongoDB & Mongoose ডেটাবেসের জন্য",
          "প্রজেক্ট: সিম্পল ব্যাকএন্ড API",
        ],
      },
      {
        title: "মডিউল ৪: অথেন্টিকেশন & সিকিউরিটি (সপ্তাহ ১০–১২)",
        topics: [
          "JWT অথেন্টিকেশন & অথরাইজেশন",
          "সেশন ম্যানেজমেন্ট & কুকি",
          "পাসওয়ার্ড হ্যাশিং & ইনপুট ভ্যালিডেশন",
          "প্রজেক্ট: সিকিউর ইউজার অথেন্টিকেশন সিস্টেম",
        ],
      },
      {
        title: "মডিউল ৫: ফুল-স্ট্যাক ইন্টিগ্রেশন (সপ্তাহ ১৩–১৬)",
        topics: [
          "React ফ্রন্টএন্ডকে Node/Express ব্যাকএন্ডের সাথে সংযোগ করা",
          "API রিকোয়েস্ট হ্যান্ডলিং & স্টেট ম্যানেজমেন্ট",
          "এরর হ্যান্ডলিং & ফর্ম ভ্যালিডেশন",
          "প্রজেক্ট: ফুল-স্ট্যাক ব্লগ বা ই-কমার্স MVP",
        ],
      },
      {
        title: "মডিউল ৬: অ্যাডভান্সড ফিচার (সপ্তাহ ১৭–২০)",
        topics: [
          "ফাইল আপলোড & ক্লাউড ইন্টিগ্রেশন",
          "ইমেইল নোটিফিকেশন & পেমেন্ট গেটওয়ে মূল বিষয়",
          "ডিপ্লয়মেন্ট সেরা প্র্যাকটিস (Vercel/Heroku/Netlify)",
          "প্রজেক্ট: অ্যাডভান্সড ফিচারসহ ফুল-স্ট্যাক অ্যাপ্লিকেশন",
        ],
      },
      {
        title: "মডিউল ৭: টেস্টিং & অপটিমাইজেশন (সপ্তাহ ২১–২২)",
        topics: [
          "ইউনিট & ইন্টিগ্রেশন টেস্টিং (Jest, React Testing Library)",
          "পারফরম্যান্স অপটিমাইজেশন (Code Splitting, Lazy Loading)",
          "সিকিউরিটি সেরা প্র্যাকটিস",
          "প্রজেক্ট: অপ্টিমাইজড ফুল-স্ট্যাক অ্যাপ",
        ],
      },
      {
        title: "মডিউল ৮: ক্যাপস্টোন প্রজেক্ট & পোর্টফোলিও (সপ্তাহ ২৩–২৪)",
        topics: [
          "এন্ড-টু-এন্ড ফুল-স্ট্যাক অ্যাপ্লিকেশন",
          "ক্লাউড হোস্টিংয়ে ডিপ্লয়মেন্ট",
          "মাল্টিপল প্রজেক্ট সহ পোর্টফোলিও সেটআপ",
          "রিজিউম & GitHub সেরা প্র্যাকটিস",
        ],
      },
    ],
  },
];

// Framer Motion variants
const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

export default function CourseCurriculum() {
  return (
    <>
      <Section className="grid-bg text-white py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-[#00f0ff] text-center mb-4 pt-5"
        >
          সম্পূর্ণ ওয়েব ডেভেলপমেন্ট রোডম্যাপ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#66f0ff] text-center max-w-2xl mx-auto text-sm md:text-base"
        >
          সব তিনটি কোর্স: ফ্রন্টএন্ড, ব্যাকএন্ড, ফুল-স্ট্যাক, মডিউল, প্রজেক্ট
          এবং ক্যাপস্টোন প্রজেক্টসহ।
        </motion.p>
      </Section>

      <Section className="py-12 md:py-16 bg-[#001f2e] mx-4 md:mx-16 rounded-xl shadow-lg">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              whileHover={{ scale: 1.03, borderColor: "#ff4f9d" }}
              className="bg-[#0a0a0a]/80 p-6 rounded-lg border-l-4 border-[#00f0ff] shadow-md transition-all duration-300 cursor-pointer overflow-y-auto max-h-[80vh]"
            >
              <h2 className="text-xl md:text-2xl font-bold text-[#00f0ff] mb-4">
                {course.title}
              </h2>
              {course.modules.map((module, mid) => (
                <div key={mid} className="mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-[#ff4f9d] mb-2">
                    {module.title}
                  </h3>
                  <ul className="list-disc ml-5 space-y-1 text-[#a0f0ff]">
                    {module.topics.map((topic, tid) => (
                      <li key={tid}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
