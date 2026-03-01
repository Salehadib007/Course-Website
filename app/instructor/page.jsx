"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InstructorPage() {
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
      title: "Modern UI Design",
      desc: "Pixel-perfect, user-centric interfaces that convert and delight.",
    },
    {
      title: "Landing Pages",
      desc: "High-converting landing pages optimized for performance and aesthetics.",
    },
    {
      title: "Portfolio Websites",
      desc: "Professional portfolios that showcase your work with impact.",
    },
    {
      title: "WordPress Sites",
      desc: "Custom WordPress builds with tailored themes and plugins.",
    },
    {
      title: "MERN Stack Apps",
      desc: "Full-stack applications using MongoDB, Express, React & Node.",
    },
    {
      title: "E-Commerce Stores",
      desc: "Online stores with smooth UX, secure payments, and scale.",
    },
  ];

  const education = [
    {
      degree: "BA in English",
      school: "Gopalganj Science & Technology University",
      year: "2024 – Running",
    },
    {
      degree: "Higher Secondary",
      school: "Govt. Bangabandhu College — Science Faculty",
      year: "2020–2022",
    },
    {
      degree: "Secondary School",
      school: "Swarnakali High School — Science Faculty",
      year: "2018–2020",
    },
  ];

  const stats = [
    { value: "100+", label: "Projects Done" },
    { value: "4+", label: "Years Experience" },
    { value: "50+", label: "Happy Clients" },
  ];

  return (
    <section
      className="ip-root relative overflow-hidden"
      style={{ fontFamily: "'Sora', sans-serif", background: "#050810" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');

        :root {
          --cyan: #00f0ff;
          --cyan-dim: rgba(0,240,255,0.12);
          --cyan-border: rgba(0,240,255,0.25);
          --bg-dark: #050810;
          --bg-card: #0a0f1e;
          --bg-card2: #0d1525;
          --text-muted: #7eb8c9;
          --text-body: #a8d8e8;
        }

        .ip-root * { box-sizing: border-box; }

        /* ── Typography helpers ── */
        .glow-text {
          text-shadow: 0 0 40px rgba(0,240,255,0.5), 0 0 80px rgba(0,240,255,0.2);
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #00f0ff;
          opacity: 0.7;
        }
        .tag-pill {
          background: rgba(0,240,255,0.08);
          border: 1px solid rgba(0,240,255,0.2);
          color: #00f0ff;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        /* ── Card ── */
        .card-glow {
          box-shadow: 0 0 0 1px var(--cyan-border), 0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,240,255,0.08);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .card-glow:hover {
          box-shadow: 0 0 0 1px rgba(0,240,255,0.5), 0 16px 48px rgba(0,240,255,0.12), inset 0 1px 0 rgba(0,240,255,0.15);
          transform: translateY(-4px);
        }

        /* ── Backgrounds ── */
        .grid-bg {
          background-image:
            linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 200px;
          opacity: 0.5;
        }

        /* ── Avatar ring ── */
        .avatar-ring {
          background: conic-gradient(from 0deg, #00f0ff, #0044ff, #00f0ff 60%, transparent 70%, transparent 100%);
          padding: 3px;
          border-radius: 50%;
          display: inline-block;
        }

        /* ── Skill bar ── */
        .skill-bar-fill {
          position: relative;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #00f0ff, #0077ff);
          box-shadow: 0 0 12px rgba(0,240,255,0.6);
          animation: barGrow 1.4s cubic-bezier(0.22,1,0.36,1) forwards;
          transform-origin: left;
        }
        @keyframes barGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* ── LAYOUT: shared container ── */
        .ip-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        /* ── SECTION paddings ── */
        .ip-section { padding: 60px 20px; }
        @media (min-width: 768px) { .ip-section { padding: 80px 24px; } }

        /* ── HERO ── */
        .ip-hero {
          padding: 80px 20px 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 768px) { .ip-hero { padding: 100px 24px 100px; } }

        .ip-hero-stats {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (min-width: 480px) { .ip-hero-stats { gap: 40px; } }

        /* ── ABOUT grid ── */
        .ip-about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .ip-about-grid { grid-template-columns: 1fr 1fr; gap: 60px; }
        }

        .ip-about-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (min-width: 480px) { .ip-about-cards { gap: 16px; } }

        /* ── SKILLS grid ── */
        .ip-skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 580px) { .ip-skills-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .ip-skills-grid { grid-template-columns: 1fr 1fr 1fr; gap: 24px; } }

        /* ── SERVICES grid ── */
        .ip-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 580px) { .ip-services-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .ip-services-grid { grid-template-columns: 1fr 1fr 1fr; gap: 20px; } }

        /* ── EDUCATION timeline ── */
        .ip-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-left: 44px;
        }
        @media (min-width: 600px) { .ip-timeline { padding-left: 56px; gap: 28px; } }

        .ip-timeline-line {
          position: absolute;
          left: 14px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, #00f0ff, transparent);
          opacity: 0.3;
        }
        @media (min-width: 600px) { .ip-timeline-line { left: 20px; } }

        .ip-edu-dot {
          position: absolute;
          left: -36px;
          top: 20px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #00f0ff;
          box-shadow: 0 0 12px #00f0ff;
        }
        @media (min-width: 600px) { .ip-edu-dot { left: -44px; } }

        .ip-edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 8px;
        }

        /* ── SECTION HEADINGS ── */
        .ip-section-h2 {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        /* ── CTA buttons ── */
        .ip-cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .ip-btn-primary {
          background: linear-gradient(135deg, #00f0ff, #0055ff);
          color: #050810;
          padding: 13px 28px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 0.03em;
          box-shadow: 0 0 30px rgba(0,240,255,0.35);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
          white-space: nowrap;
        }
        .ip-btn-primary:hover { box-shadow: 0 0 50px rgba(0,240,255,0.5); transform: translateY(-2px); }
        .ip-btn-outline {
          background: transparent;
          color: #00f0ff;
          padding: 13px 28px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.9rem;
          border: 1px solid rgba(0,240,255,0.35);
          letter-spacing: 0.03em;
          transition: border-color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .ip-btn-outline:hover { border-color: rgba(0,240,255,0.7); background: rgba(0,240,255,0.05); }

        /* ── Teaching tags ── */
        .ip-tags-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>

      {/* Ambient blobs */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "-10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,60,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="noise-overlay"
          style={{ position: "absolute", inset: 0 }}
        />
      </div>

      {/* ─── HERO ─── */}
      <div
        className="grid-bg ip-hero"
        style={{ position: "relative", zIndex: 10 }}
      >
        <motion.div {...fadeInUp(0)} style={{ marginBottom: 20 }}>
          <span className="tag-pill">Instructor Profile</span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          {...fadeInUp(0.1)}
          style={{ marginBottom: 32, position: "relative" }}
        >
          <div className="avatar-ring">
            <div
              style={{ background: "#050810", borderRadius: "50%", padding: 4 }}
            >
              <Image
                src="/Adib.png"
                alt="Saleh Adib Hasnat"
                width={140}
                height={140}
                style={{
                  borderRadius: "50%",
                  display: "block",
                  objectFit: "cover",
                  width: "clamp(100px, 20vw, 160px)",
                  height: "clamp(100px, 20vw, 160px)",
                }}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#00ff88",
              border: "3px solid #050810",
              boxShadow: "0 0 10px #00ff88",
            }}
          />
        </motion.div>

        <motion.div
          {...fadeInUp(0.15)}
          className="section-label"
          style={{ marginBottom: 12 }}
        >
          Full-Stack Developer & UI/UX Designer
        </motion.div>

        <motion.h1
          {...fadeInUp(0.2)}
          className="glow-text"
          style={{
            fontSize: "clamp(2rem, 7vw, 5rem)",
            fontWeight: 800,
            color: "#00f0ff",
            lineHeight: 1.1,
            marginBottom: 20,
            margin: "0 0 20px",
          }}
        >
          Saleh Adib Hasnat
        </motion.h1>

        <motion.p
          {...fadeInUp(0.3)}
          style={{
            color: "var(--text-body)",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            maxWidth: 600,
            lineHeight: 1.8,
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          A multi-faceted Full-Stack MERN Developer, Figma Designer, WordPress
          Expert, Script Writer, Debater & Stage Actor from Gopalganj,
          Bangladesh. I just try everything — sometimes I do great things,
          sometimes I fail, but that's my way of life.
        </motion.p>

        {/* Stats */}
        <motion.div {...fadeInUp(0.4)} className="ip-hero-stats">
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                className="mono"
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#00f0ff",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  marginTop: 4,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── ABOUT ─── */}
      <div
        className="ip-section"
        style={{ background: "#0a0f1e", position: "relative", zIndex: 10 }}
      >
        <div className="ip-container">
          <div className="ip-about-grid">
            <motion.div {...fadeInUp(0)}>
              <div className="section-label" style={{ marginBottom: 12 }}>
                // about me
              </div>
              <h2 className="ip-section-h2" style={{ marginBottom: 20 }}>
                Who I <span style={{ color: "#00f0ff" }}>Am?</span>
              </h2>
              <p
                style={{
                  color: "var(--text-body)",
                  lineHeight: 1.9,
                  marginBottom: 16,
                  fontSize: "clamp(0.88rem, 2vw, 1rem)",
                }}
              >
                Currently a BA English student at Gopalganj Science & Technology
                University. Beyond academics, I'm a passionate Full-Stack
                Developer with 4+ years of hands-on experience building modern,
                responsive websites and web applications.
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                  fontSize: "0.9rem",
                }}
              >
                I wear many hats — developer, designer, script writer, stage
                actor, debater, former scout, speaker, and more. My teaching
                style is built around real-world projects, live mentorship, and
                portfolio-building so students graduate ready for the industry.
              </p>
            </motion.div>

            <motion.div {...fadeInUp(0.2)} className="ip-about-cards">
              {[
                { label: "Location", value: "Gopalganj, Bangladesh" },
                { label: "Email", value: "salehadib007@gmail.com" },
                { label: "Phone", value: "+880 1317 136 420" },
                { label: "Freelance", value: "Available on Fiverr" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card-glow"
                  style={{
                    background: "#0d1525",
                    borderRadius: 12,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: "9px",
                      color: "#00f0ff",
                      opacity: 0.6,
                      marginBottom: 4,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      color: "#c8e8f0",
                      fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                      fontWeight: 600,
                      wordBreak: "break-word",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── SKILLS ─── */}
      <div
        className="ip-section grid-bg"
        style={{ background: "#050810", position: "relative", zIndex: 10 }}
      >
        <div className="ip-container">
          <motion.div
            {...fadeInUp(0)}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <div className="section-label" style={{ marginBottom: 12 }}>
              // technical skills
            </div>
            <h2 className="ip-section-h2">
              My <span style={{ color: "#00f0ff" }}>Speciality</span>
            </h2>
          </motion.div>
          <div className="ip-skills-grid">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp(0.05 * idx)}
                className="card-glow"
                style={{
                  background: "#0a0f1e",
                  borderRadius: 14,
                  padding: "20px 24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      color: "#e0f4ff",
                      fontWeight: 600,
                      fontSize: "0.92rem",
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="mono"
                    style={{
                      color: "#00f0ff",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    background: "rgba(0,240,255,0.1)",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="skill-bar-fill"
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
      <div
        className="ip-section"
        style={{ background: "#0a0f1e", position: "relative", zIndex: 10 }}
      >
        <div className="ip-container">
          <motion.div
            {...fadeInUp(0)}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <div className="section-label" style={{ marginBottom: 12 }}>
              // what i do
            </div>
            <h2
              className="ip-section-h2"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              I design and develop services for customers of{" "}
              <span style={{ color: "#00f0ff" }}>all sizes</span>
            </h2>
          </motion.div>
          <div className="ip-services-grid">
            {services.map((svc, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp(0.05 * idx)}
                className="card-glow"
                style={{
                  background: "#0d1525",
                  borderRadius: 16,
                  padding: "24px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background:
                      "linear-gradient(90deg, transparent, #00f0ff, transparent)",
                    opacity: 0.5,
                  }}
                />
                <div
                  className="mono"
                  style={{
                    color: "#00f0ff",
                    fontSize: "11px",
                    marginBottom: 10,
                    opacity: 0.6,
                  }}
                >
                  0{idx + 1}
                </div>
                <h3
                  style={{
                    color: "#e0f4ff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: 8,
                    margin: "0 0 8px",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── EDUCATION ─── */}
      <div
        className="ip-section"
        style={{ background: "#050810", position: "relative", zIndex: 10 }}
      >
        <div className="ip-container">
          <motion.div
            {...fadeInUp(0)}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <div className="section-label" style={{ marginBottom: 12 }}>
              // education
            </div>
            <h2 className="ip-section-h2">
              My Overall <span style={{ color: "#00f0ff" }}>Studies</span>
            </h2>
          </motion.div>
          <div style={{ position: "relative" }}>
            <div className="ip-timeline-line" />
            <div className="ip-timeline">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp(0.1 * idx)}
                  style={{ position: "relative" }}
                >
                  <div className="ip-edu-dot" />
                  <div
                    className="card-glow"
                    style={{
                      background: "#0a0f1e",
                      borderRadius: 16,
                      padding: "20px 22px",
                    }}
                  >
                    <div className="ip-edu-header">
                      <h3
                        style={{
                          color: "#e0f4ff",
                          fontWeight: 700,
                          margin: 0,
                          fontSize: "clamp(0.9rem, 2vw, 1rem)",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <span className="tag-pill">{edu.year}</span>
                    </div>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.88rem",
                        margin: 0,
                      }}
                    >
                      {edu.school}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── TEACHING PHILOSOPHY ─── */}
      <div
        className="ip-section"
        style={{ background: "#0a0f1e", position: "relative", zIndex: 10 }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <motion.div {...fadeInUp(0)}>
            <div className="section-label" style={{ marginBottom: 16 }}>
              // teaching philosophy
            </div>
            <h2 className="ip-section-h2" style={{ marginBottom: 24 }}>
              Learning by <span style={{ color: "#00f0ff" }}>Doing</span>
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                lineHeight: 1.9,
                marginBottom: 36,
              }}
            >
              Saleh believes the best way to learn web development is to
              actually build things. Students work on real projects from day one
              — deploying apps, writing production code, and receiving live code
              reviews and portfolio feedback to prepare for the real world.
            </p>
            <div className="ip-tags-row">
              {[
                "Hands-On Projects",
                "Live Code Reviews",
                "Portfolio Building",
                "Real-World Deployments",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="tag-pill"
                  style={{ fontSize: "13px", padding: "8px 18px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div
        className="ip-section grid-bg"
        style={{
          background: "#050810",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <motion.div {...fadeInUp(0)} style={{ padding: "0 20px" }}>
          <div className="section-label" style={{ marginBottom: 16 }}>
            // hire me
          </div>
          <h2
            className="glow-text"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
              fontWeight: 800,
              color: "#00f0ff",
              marginBottom: 16,
              margin: "0 0 16px",
            }}
          >
            Let's discuss your project
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: 32,
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            }}
          >
            Always available for freelancing if the right project comes along.
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
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
