"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./InstructorPage.css"; // Import the CSS file

export default function InstructorPage() {
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React & Next.js", level: 95 },
    { name: "Node.js & Express", level: 95 },
    { name: "WordPress", level: 80 },
    { name: "Figma & Canva", level: 90 },
  ];

  const services = [
    {
      title: "আধুনিক UI ডিজাইন",
      desc: "পিক্সেল-সঠিক, ব্যবহারকারী-কেন্দ্রিক ইন্টারফেস যা রূপান্তর ঘটায় এবং আনন্দ দেয়।",
    },
    {
      title: "ল্যান্ডিং পেজ",
      desc: "উচ্চ রূপান্তর ক্ষমতাসম্পন্ন ল্যান্ডিং পেজ যা পারফরম্যান্স ও নান্দনিকতার জন্য অপ্টিমাইজ করা হয়েছে।",
    },
    {
      title: "পোর্টফোলিও ওয়েবসাইট",
      desc: "পেশাদার পোর্টফোলিও যা আপনার কাজকে প্রভাবশালীভাবে প্রদর্শন করে।",
    },
    {
      title: "ওয়ার্ডপ্রেস সাইট",
      desc: "কাস্টম ওয়ার্ডপ্রেস বিল্ড, বিশেষভাবে তৈরি থিম এবং প্লাগইনসহ।",
    },
    {
      title: "MERN স্ট্যাক অ্যাপ",
      desc: "মঙ্গোডিবি, এক্সপ্রেস, রিয়্যাক্ট ও নোড ব্যবহার করে সম্পূর্ণ স্ট্যাক অ্যাপ্লিকেশন।",
    },
    {
      title: "ই-কমার্স স্টোর",
      desc: "স্মুথ UX, নিরাপদ পেমেন্ট এবং স্কেল সক্ষম অনলাইন স্টোর।",
    },
  ];

  const education = [
    {
      degree: "ইংরেজিতে বিএ",
      school: "গোপালগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      year: "২০২৪ – চলমান",
    },
    {
      degree: "উচ্চ মাধ্যমিক",
      school: "সরকারি বঙ্গবন্ধু কলেজ — বিজ্ঞান অনুষদ",
      year: "২০২০–২০২২",
    },
    {
      degree: "মাধ্যমিক স্কুল",
      school: "স্বর্ণকলি উচ্চ বিদ্যালয় — বিজ্ঞান অনুষদ",
      year: "২০১৮–২০২০",
    },
  ];

  const stats = [
    { value: "১০০+", label: "সম্পন্ন প্রজেক্ট" },
    { value: "৪+", label: "বছরের অভিজ্ঞতা" },
    { value: "৫০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
  ];

  return (
    <section className="ip-root">
      {/* Ambient blobs */}
      <div className="ip-ambient-bg">
        <div className="ip-blob ip-blob-1" />
        <div className="ip-blob ip-blob-2" />
        <div className="ip-noise-overlay" />
      </div>

      {/* ─── HERO ─── */}
      <div className="ip-hero grid-bg">
        <motion.div {...fadeInUp(0)} className="ip-hero-tag">
          <span className="tag-pill">Instructor Profile</span>
        </motion.div>

        {/* Avatar */}
        <motion.div {...fadeInUp(0.1)} className="ip-avatar-wrapper">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <Image
                src="/Adib.png"
                alt="Saleh Adib Hasnat"
                width={140}
                height={140}
                className="avatar-image"
              />
            </div>
          </div>
          <div className="avatar-status" />
        </motion.div>

        <motion.div {...fadeInUp(0.15)} className="section-label">
          Full-Stack Developer & UI/UX Designer
        </motion.div>

        <motion.h1 {...fadeInUp(0.2)} className="ip-hero-title glow-text">
          Saleh Adib Hasnat
        </motion.h1>

        <motion.p {...fadeInUp(0.3)} className="ip-hero-description">
          আমি একজন ফ্রন্ট-এন্ড ডেভেলপার এবং UI/UX ডিজাইনার, আমি ৪+ বছরের
          অভিজ্ঞতা নিয়ে আধুনিক, রেসপন্সিভ ওয়েবসাইট এবং অ্যাপ্লিকেশন তৈরি
          করেছি। আমার শিক্ষাদানের পদ্ধতি বাস্তব-জগতের প্রজেক্ট, লাইভ মেন্টরশিপ
          এবং পোর্টফোলিও-বিল্ডিং এর উপর ভিত্তি করে তৈরি করা হয়েছে যাতে
          শিক্ষার্থীরা ইন্ডাস্ট্রির জন্য প্রস্তুত হয়ে উঠতে পারে। আমি গোপালগঞ্জ
          বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ে স্নাতক করছি এবং আমার লক্ষ্য হল
          আমার দক্ষতা এবং অভিজ্ঞতা ব্যবহার করে শিক্ষার্থীদের ডিজিটাল প্লাটফর্মে
          দক্ষ করে তোলা। আমি বিশ্বাস করি যে সঠিক দিকনির্দেশনা এবং প্র্যাকটিসের
          মাধ্যমে কেউই এই জটিল বিষয়টি শিখতে পারে এবং আমি এখানে আছি সেই যাত্রায়
          আপনাকে গাইড করার জন্য।
        </motion.p>

        {/* Stats */}
        <motion.div {...fadeInUp(0.4)} className="ip-hero-stats">
          {stats.map((s, i) => (
            <div key={i} className="ip-stat">
              <div className="ip-stat-value mono">{s.value}</div>
              <div className="ip-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── ABOUT ─── */}
      <div className="ip-section ip-section-dark">
        <div className="ip-container">
          <div className="ip-about-grid">
            <motion.div {...fadeInUp(0)}>
              <div className="section-label">// about me</div>
              <h2 className="ip-section-h2">
                Who I <span className="ip-accent">Am?</span>
              </h2>
              <p className="ip-about-text">
                বর্তমানে আমি গোপালগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ে
                ইংরেজিতে বিএ শিক্ষার্থী। একাডেমিক ছাড়াও, আমি একজন উদ্যমী
                ফুল-স্ট্যাক ডেভেলপার, যার হাতে ৪+ বছরের বাস্তব অভিজ্ঞতা রয়েছে
                আধুনিক, রেসপন্সিভ ওয়েবসাইট এবং ওয়েব অ্যাপ্লিকেশন তৈরিতে।
              </p>
              <p className="ip-about-text-muted">
                আমি একাধিক ভূমিকায় কাজ করি — ডেভেলপার, ডিজাইনার এবং একজন দক্ষ
                মেন্টর যে আপনার ডিজিটাল স্কিল ইম্প্রুভ করে একজন দক্ষ ডেভেলপার
                হিসেবে গড়ে তুলতে সাহায্য করতে পারবে।
              </p>
            </motion.div>

            <motion.div {...fadeInUp(0.2)} className="ip-about-cards">
              {[
                { label: "Location", value: "গোপালগঞ্জ, বাংলাদেশ" },
                { label: "Email", value: "salehadib007@gmail.com" },
                { label: "Phone", value: "+৮৮০ ১৩১৭ ১৩৬ ৪২০" },
                { label: "Freelance", value: "Fiverr এ উপলব্ধ" },
              ].map((item, i) => (
                <div key={i} className="ip-info-card card-glow">
                  <div className="ip-info-card-label mono">{item.label}</div>
                  <div className="ip-info-card-value">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── SKILLS ─── */}
      <div className="ip-section grid-bg">
        <div className="ip-container">
          <motion.div {...fadeInUp(0)} className="ip-section-header">
            <div className="section-label">// technical skills</div>
            <h2 className="ip-section-h2">
              My <span className="ip-accent">Speciality</span>
            </h2>
          </motion.div>

          <div className="ip-skills-grid">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp(0.05 * idx)}
                className="ip-skill-card card-glow"
              >
                <div className="ip-skill-header">
                  <span className="ip-skill-name">{skill.name}</span>
                  <span className="ip-skill-percent mono">{skill.level}%</span>
                </div>
                <div className="ip-skill-bar-bg">
                  <div
                    className="ip-skill-bar-fill"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${0.3 + idx * 0.1}s`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <div className="ip-section ip-section-dark">
        <div className="ip-container">
          <motion.div {...fadeInUp(0)} className="ip-section-header">
            <div className="section-label">// what i do</div>
            <h2 className="ip-section-h2 ip-section-h2-centered">
              I design and develop services for customers of{" "}
              <span className="ip-accent">all sizes</span>
            </h2>
          </motion.div>

          <div className="ip-services-grid">
            {services.map((svc, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp(0.05 * idx)}
                className="ip-service-card card-glow"
              >
                <div className="ip-service-glow-bar" />
                <div className="ip-service-number mono">0{idx + 1}</div>
                <h3 className="ip-service-title">{svc.title}</h3>
                <p className="ip-service-desc">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── EDUCATION ─── */}
      <div className="ip-section">
        <div className="ip-container">
          <motion.div {...fadeInUp(0)} className="ip-section-header">
            <div className="section-label">// education</div>
            <h2 className="ip-section-h2">
              My Overall <span className="ip-accent">Studies</span>
            </h2>
          </motion.div>

          <div className="ip-timeline-container">
            <div className="ip-timeline-line" />
            <div className="ip-timeline">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp(0.1 * idx)}
                  className="ip-timeline-item"
                >
                  <div className="ip-timeline-dot" />
                  <div className="ip-timeline-card card-glow">
                    <div className="ip-timeline-header">
                      <h3 className="ip-timeline-degree">{edu.degree}</h3>
                      <span className="tag-pill">{edu.year}</span>
                    </div>
                    <p className="ip-timeline-school">{edu.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── TEACHING PHILOSOPHY ─── */}
      <div className="ip-section ip-section-dark ip-section-centered">
        <motion.div {...fadeInUp(0)}>
          <div className="section-label">// teaching philosophy</div>
          <h2 className="ip-section-h2">
            Learn By <span className="ip-accent">Doing</span>
          </h2>
          <p className="ip-philosophy-text">
            আমি বিশ্বাস করি, ওয়েব ডেভেলপমেন্ট শেখার সবচেয়ে কার্যকর উপায় হলো
            বাস্তবে কাজ তৈরি করা। শিক্ষার্থীরা প্রথম দিন থেকেই বাস্তব প্রকল্পে
            কাজ করে — অ্যাপ ডিপ্লয় করা, প্রোডাকশন কোড লেখা, এবং লাইভ কোড রিভিউ
            ও পোর্টফোলিও ফিডব্যাক গ্রহণের মাধ্যমে বাস্তব জীবনের জন্য নিজেদের
            প্রস্তুত করে।
          </p>
          <div className="ip-tags-row">
            {[
              "হাতে হাতে প্রজেক্ট",
              "লাইভ কোড রিভিউ",
              "পোর্টফোলিও তৈরি",
              "বাস্তব প্রজেক্ট ডিপ্লয়মেন্ট",
            ].map((tag, i) => (
              <span key={i} className="tag-pill ip-tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── CTA ─── */}
      <div className="ip-section grid-bg ip-section-centered">
        <motion.div {...fadeInUp(0)}>
          <div className="section-label">// hire me</div>
          <h2 className="ip-cta-title glow-text">Let's discuss your project</h2>
          <p className="ip-cta-description">
            সর্বদা নতুন প্রজেক্ট ও চ্যালেঞ্জের জন্য উন্মুক্ত। কোর্সে যেকোনো
            ধরনের সহযোগিতার জন্য আমার সাথে যোগাযোগ করতে দ্বিধা করবেন না।
          </p>
          <div className="ip-cta-btns">
            <a
              href="https://www.fiverr.com/salehadib007/"
              target="_blank"
              rel="noreferrer"
              className="ip-btn-primary"
            >
              Hire Me on Fiverr
            </a>
            <a href="mailto:salehadib007@gmail.com" className="ip-btn-outline">
              ইমেইল করুন
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
