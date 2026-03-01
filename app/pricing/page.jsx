"use client";

import Link from "next/link";
import Section from "../components/Section";
import { motion } from "framer-motion";

// ── Static data — defined once at module level, never recreated ──
const courses = [
  {
    id: "frontend",
    name: "Frontend Web Development",
    duration: "3 months",
    price: 10000,
    discount: null,
    payment: ["Full Payment: 10,000 BDT", "Monthly: 3,500 BDT/month"],
    support: [
      "1:1 mentoring & doubt support via chat/email",
      "Weekly live Q&A sessions",
      "Hands-on mini-projects & code walkthroughs",
      "Responsive & modern UI design guidance",
      "Access to templates & resources",
      "Portfolio-ready projects",
      "Community support",
    ],
  },
  {
    id: "backend",
    name: "Backend Web Development",
    duration: "3 months",
    price: 10000,
    discount: null,
    payment: ["Full Payment: 10,000 BDT", "Monthly: 3,500 BDT/month"],
    support: [
      "1:1 mentoring & doubt support via chat/email",
      "Weekly live sessions & project reviews",
      "REST APIs, databases & auth guidance",
      "Sample APIs & project templates",
      "Real-world backend project guidance",
      "Deployment guidance (Heroku, Render, Cloud)",
      "Community support",
    ],
  },
  {
    id: "fullstack",
    name: "Full-Stack Web Development",
    duration: "6 months",
    price: 18000,
    discount: "2,000 BDT off",
    payment: [
      "Full Payment: 18,000 BDT",
      "Monthly: 3,500 BDT/month for 6 months",
    ],
    support: [
      "Full 1:1 mentoring & doubt support via chat/email",
      "Weekly live sessions, code reviews & pair programming",
      "Frontend + backend integration guidance",
      "Portfolio & capstone project support",
      "Deployment guidance (Vercel, Heroku, AWS)",
      "Interview & technical prep guidance",
      "Access to premium templates & real datasets",
      "Exclusive student community",
    ],
    popular: true,
  },
];

// ── Animation variants — static objects at module level ──
const headingVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

// ── Stagger container so cards animate in sequence ──
const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Extracted as a separate component so React can bail out of re-renders ──
function CourseCard({ course }) {
  const href = `/payment?course=${course.id}&name=${encodeURIComponent(course.name)}&price=${course.price}&duration=${encodeURIComponent(course.duration)}`;

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ scale: 1.03 }}
      className={`pp-card${course.popular ? " pp-card--popular" : ""}`}
    >
      {course.popular && <div className="pp-popular-badge">Most Popular</div>}

      <h2 className="pp-course-name">{course.name}</h2>
      <p className="pp-duration">Duration: {course.duration}</p>
      <p className="pp-price">৳ {course.price.toLocaleString()}</p>
      {course.discount && <p className="pp-discount">{course.discount}</p>}

      <ul className="pp-support-list">
        {course.support.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="pp-cta-wrap">
        <Link href={href} className="pp-enroll-btn">
          Enroll Now
        </Link>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <Section className="grid-bg min-h-screen py-20">
      <div className="pp-page-wrap">
        <motion.h1
          variants={headingVariant}
          initial="hidden"
          animate="visible"
          className="pp-heading"
        >
          Our Courses & Pricing
        </motion.h1>

        <motion.div
          className="pp-grid"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      </div>

      <style>{CSS}</style>
    </Section>
  );
}

// ── Static CSS string — defined once, never causes re-renders ──
const CSS = `
  .pp-page-wrap {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    text-align: center;
  }
  .pp-heading {
    font-size: clamp(2.4rem, 5vw, 3.75rem);
    font-weight: 800;
    color: #00f0ff;
    margin-bottom: 48px;
  }
  .pp-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  @media (max-width: 768px) {
    .pp-grid { grid-template-columns: 1fr; }
  }

  /* Card */
  .pp-card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.5);
    border: 1px solid #001f2e;
    background: #0d1117;
    transition: box-shadow 0.3s;
  }
  .pp-card--popular {
    background: #001f2e;
    border-color: #00f0ff;
  }
  .pp-popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #ff4f9d;
    color: #fff;
    padding: 4px 16px;
    border-radius: 99px;
    font-size: 0.875rem;
    font-weight: 600;
    white-space: nowrap;
  }

  /* Content */
  .pp-course-name {
    font-size: clamp(1.4rem, 2vw, 1.875rem);
    font-weight: 700;
    color: #00f0ff;
    margin-bottom: 8px;
  }
  .pp-duration {
    color: #66f0ff;
    font-weight: 600;
    margin-bottom: 4px;
    font-size: 0.95rem;
  }
  .pp-price {
    color: #a0f0ff;
    font-weight: 700;
    font-size: 1.875rem;
    margin-bottom: 8px;
  }
  .pp-discount {
    color: #ff4f9d;
    font-weight: 600;
    margin-bottom: 12px;
    font-size: 0.95rem;
  }
  .pp-support-list {
    text-align: left;
    color: #a0f0ff;
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* CTA */
  .pp-cta-wrap { margin-top: auto; }
  .pp-enroll-btn {
    display: inline-block;
    width: 100%;
    padding: 12px 24px;
    background: #00f0ff;
    color: #0a0a0a;
    font-weight: 600;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0,240,255,0.2);
    transition: box-shadow 0.3s, transform 0.3s;
  }
  .pp-enroll-btn:hover {
    box-shadow: 0 8px 24px rgba(0,240,255,0.35);
    transform: scale(1.05);
  }
`;
