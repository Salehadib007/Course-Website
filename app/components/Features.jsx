"use client";

import Section from "./Section";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

export default function Features() {
  const features = [
    {
      title: "নতুনদের জন্য উপযোগী",
      desc: "কোনো পূর্ববর্তী কম্পিউটার জ্ঞান প্রয়োজন নেই। শূন্য থেকে ধাপে ধাপে শেখা শুরু করুন।",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
    {
      title: "৩ মাসের ইনটেনসিভ ট্রেনিং",
      desc: "শুরু থেকে ধাপে ধাপে প্র্যাকটিক্যাল কোডিং, সাথে রিয়েল-টাইম মেন্টরশিপ।",
      color: "bg-[#001a2a] text-[#00f0ff]",
    },
    {
      title: "পোর্টফোলিও প্রজেক্ট",
      desc: "আপনার পোর্টফোলিও ও রিজিউমের জন্য বাস্তবমুখী অ্যাপ্লিকেশন তৈরি করুন।",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
    {
      title: "মেন্টরশিপ সাপোর্ট",
      desc: "আপনার শেখার পুরো যাত্রায় ইন্ডাস্ট্রি এক্সপার্টদের গাইডলাইন পান।",
      color: "bg-[#001a2a] text-[#00f0ff]",
    },
    {
      title: "ক্যারিয়ার গাইডেন্স",
      desc: "ইন্টারভিউ প্রস্তুতি, রিজিউম তৈরি এবং জব-রেডি স্কিল শিখুন।",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
    {
      title: "কমিউনিটি এক্সেস",
      desc: "লার্নারদের একটি কমিউনিটিতে যোগ দিন এবং একসাথে প্রজেক্টে কাজ করুন।",
      color: "bg-[#001a2a] text-[#00f0ff]",
    },
    {
      title: "সার্টিফিকেশন",
      desc: "কোর্স সম্পন্ন করার পর একটি ভেরিফাইড সার্টিফিকেট পান।",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
    {
      title: "এআই-ভিত্তিক লার্নিং",
      desc: "শেখার গতি বাড়াতে এআই টুল ব্যবহার করুন।",
      color: "bg-[#001a2a] text-[#00f0ff]",
    },
    {
      title: "ফ্লেক্সিবল সময়সূচি",
      desc: "নিজের সুবিধামতো সময়ে ২৪/৭ কোর্স মেটেরিয়াল অ্যাক্সেস করে শিখুন।",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
  ];

  return (
    <Section className="grid-bg text-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#00f0ff]">
          এই কোর্সে যা যা থাকছে
        </h2>
        <p className="mt-4 text-[#66f0ff]/80 max-w-xl mx-auto">
          পূর্বে কোনো অভিজ্ঞতার প্রয়োজন নেই, শুরু থেকেই গাইডলাইন এর মধ্যে দিয়ে
          সকলকে এক্সপার্ট ডেভেলপার হিসাবে প্রস্তুত করা হবে।
        </p>
      </div>

      <StaggerContainer>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div
                className={`card shadow-xl rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff] hover:shadow-2xl transition-all duration-500 ${feature.color}`}
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[#66f0ff]/90">{feature.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </Section>
  );
}
