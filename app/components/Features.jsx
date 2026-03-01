"use client";

import Section from "./Section";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

export default function Features() {
  const features = [
    {
      title: "Beginner Friendly",
      desc: "No prior computer knowledge required. Start from zero and learn step-by-step.",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
    {
      title: "3 Months Intensive Training",
      desc: "Step-by-step practical coding from scratch with real-time mentorship.",
      color: "bg-[#001a2a] text-[#00f0ff]",
    },
    {
      title: "Portfolio Projects",
      desc: "Build real-world applications for your portfolio and resume.",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
    {
      title: "Mentorship Support",
      desc: "Get guidance from industry experts throughout your learning journey.",
      color: "bg-[#001a2a] text-[#00f0ff]",
    },
    {
      title: "Career Guidance",
      desc: "Learn interview prep, resume building, and job-ready skills.",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
    {
      title: "Community Access",
      desc: "Join a community of learners and collaborate on projects.",
      color: "bg-[#001a2a] text-[#00f0ff]",
    },
    {
      title: "Certification",
      desc: "Receive a verified certificate upon course completion.",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
    {
      title: "AI-Enhanced Learning",
      desc: "Leverage AI tools to accelerate your learning process.",
      color: "bg-[#001a2a] text-[#00f0ff]",
    },
    {
      title: "Flexible Schedule",
      desc: "Learn at your own pace with 24/7 access to course materials.",
      color: "bg-[#001f2e] text-[#00f0ff]",
    },
  ];

  return (
    <Section className="grid-bg text-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#00f0ff]">
          What’s Included In The Course
        </h2>
        <p className="mt-4 text-[#66f0ff]/80 max-w-xl mx-auto">
          Everything you need to go from zero to a professional Full-Stack
          Developer.
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
