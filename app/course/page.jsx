"use client";

import Section from "../components/Section";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Course Curriculum | Full Stack Web Dev",
//   description:
//     "Complete roadmap of frontend, backend, and full-stack development courses",
// };

// Course data
const courses = [
  {
    title: "Frontend Web Development (3 months)",
    modules: [
      {
        title: "Module 1: HTML & CSS Fundamentals (Weeks 1–2)",
        topics: [
          "Introduction to Web Development and the Web Ecosystem",
          "HTML5: Structure, Semantic Tags, Forms, Multimedia",
          "CSS3: Selectors, Box Model, Positioning, Flexbox, Grid",
          "Responsive Design: Media Queries, Mobile-First Approach",
          "Project: Personal Portfolio Landing Page",
        ],
      },
      {
        title: "Module 2: Advanced CSS & UI Design (Weeks 3–4)",
        topics: [
          "CSS Animations and Transitions",
          "CSS Preprocessors: SASS/SCSS Basics",
          "Bootstrap & Tailwind CSS Frameworks",
          "Design Principles: Typography, Colors, Layout, Accessibility",
          "Project: Responsive Multi-Section Website",
        ],
      },
      {
        title: "Module 3: JavaScript Essentials (Weeks 5–6)",
        topics: [
          "JavaScript Syntax, Variables, Data Types, Operators",
          "DOM Manipulation and Event Handling",
          "Functions, Arrays, Objects, Loops, and Conditions",
          "ES6+ Features: Let/Const, Arrow Functions, Modules",
          "Project: Interactive To-Do List App",
        ],
      },
      {
        title: "Module 4: Advanced JavaScript & APIs (Weeks 7–8)",
        topics: [
          "JavaScript Asynchronous Programming: Callbacks, Promises, Async/Await",
          "Fetch API & REST API Integration",
          "Local Storage & Session Storage",
          "Form Validation & Event Delegation",
          "Project: Weather App using Public API",
        ],
      },
      {
        title: "Module 5: Frontend Frameworks (Weeks 9–11)",
        topics: [
          "Introduction to React.js (or Vue.js)",
          "Components, Props, and State Management",
          "React Router, Event Handling, and Lifecycle Methods",
          "Project: Blog or E-commerce Product Page",
        ],
      },
      {
        title: "Module 6: Final Project & Deployment (Week 12)",
        topics: [
          "Capstone Project: Complete Multi-Page Responsive Website",
          "Hosting: Netlify, Vercel, or GitHub Pages",
          "Code Review & Best Practices",
        ],
      },
    ],
  },
  {
    title: "Backend Web Development (3 months)",
    modules: [
      {
        title: "Module 1: Node.js & Express Basics (Weeks 1–2)",
        topics: [
          "Introduction to Node.js and Backend Concepts",
          "NPM & Package Management",
          "Express.js Routing, Middleware, and Error Handling",
          "Project: Simple REST API with CRUD Operations",
        ],
      },
      {
        title: "Module 2: Database Integration (Weeks 3–4)",
        topics: [
          "Introduction to Databases: SQL vs NoSQL",
          "MongoDB & Mongoose Basics",
          "CRUD Operations, Schemas, and Data Modeling",
          "Project: User Management API",
        ],
      },
      {
        title: "Module 3: Authentication & Security (Weeks 5–6)",
        topics: [
          "JWT Authentication & Authorization",
          "Password Hashing (bcrypt)",
          "Role-Based Access Control",
          "Input Validation & Sanitization",
          "Project: Secure Login/Register API",
        ],
      },
      {
        title: "Module 4: RESTful & GraphQL APIs (Weeks 7–8)",
        topics: [
          "REST API Best Practices",
          "API Versioning & Pagination",
          "Introduction to GraphQL",
          "Project: REST API with Postman Testing",
        ],
      },
      {
        title: "Module 5: Advanced Backend Features (Weeks 9–10)",
        topics: [
          "File Uploads & Cloud Storage (e.g., Cloudinary, AWS S3)",
          "Email Services Integration (Nodemailer)",
          "Logging, Error Monitoring, and Debugging",
          "Project: File Upload API with Email Notifications",
        ],
      },
      {
        title: "Module 6: Deployment & Capstone Project (Weeks 11–12)",
        topics: [
          "Hosting: Heroku, Render, or AWS Basics",
          "Environment Variables & Configuration",
          "Capstone Project: Full REST API Backend for a Web Application",
        ],
      },
    ],
  },
  {
    title: "Full-Stack Web Development (6 months)",
    modules: [
      {
        title: "Module 1: HTML, CSS & JavaScript Review (Weeks 1–3)",
        topics: [
          "Responsive Design, Flexbox, Grid",
          "ES6+ Features & DOM Manipulation",
          "Project: Interactive Landing Page",
        ],
      },
      {
        title: "Module 2: Advanced Frontend Framework (Weeks 4–6)",
        topics: [
          "React.js Fundamentals: Components, Props, State",
          "React Hooks, Context API",
          "React Router, Axios & API Integration",
          "Project: To-Do or E-commerce Frontend",
        ],
      },
      {
        title: "Module 3: Backend Fundamentals (Weeks 7–9)",
        topics: [
          "Node.js & Express.js Basics",
          "REST API Design & CRUD Operations",
          "MongoDB & Mongoose for Database",
          "Project: Simple Backend API",
        ],
      },
      {
        title: "Module 4: Authentication & Security (Weeks 10–12)",
        topics: [
          "JWT Authentication & Authorization",
          "Session Management & Cookies",
          "Password Hashing & Input Validation",
          "Project: Secure User Authentication System",
        ],
      },
      {
        title: "Module 5: Full-Stack Integration (Weeks 13–16)",
        topics: [
          "Connecting React Frontend with Node/Express Backend",
          "Handling API Requests & State Management",
          "Error Handling & Form Validations",
          "Project: Full-Stack Blog or E-commerce MVP",
        ],
      },
      {
        title: "Module 6: Advanced Features (Weeks 17–20)",
        topics: [
          "File Uploads & Cloud Integration",
          "Email Notifications & Payment Gateway Basics",
          "Deployment Best Practices (Vercel/Heroku/Netlify)",
          "Project: Full-Stack Application with Advanced Features",
        ],
      },
      {
        title: "Module 7: Testing & Optimization (Weeks 21–22)",
        topics: [
          "Unit & Integration Testing (Jest, React Testing Library)",
          "Performance Optimization (Code Splitting, Lazy Loading)",
          "Security Best Practices",
          "Project: Optimized Full-Stack App",
        ],
      },
      {
        title: "Module 8: Capstone Project & Portfolio (Weeks 23–24)",
        topics: [
          "End-to-End Full-Stack Application",
          "Deployment to Cloud Hosting",
          "Portfolio Setup with Multiple Projects",
          "Resume & GitHub Best Practices",
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
          className="text-5xl md:text-6xl font-extrabold text-[#00f0ff] text-center mb-4"
        >
          Complete Web Development Roadmap
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#66f0ff] text-center max-w-2xl mx-auto text-lg md:text-xl"
        >
          All three courses: Frontend, Backend, Full-Stack with modules,
          projects, and capstone projects.
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#00f0ff] mb-4">
                {course.title}
              </h2>
              {course.modules.map((module, mid) => (
                <div key={mid} className="mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#ff4f9d] mb-2">
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
