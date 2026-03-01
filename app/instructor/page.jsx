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
      className="relative overflow-hidden"
      style={{
        fontFamily: "'Sora', 'Space Grotesk', sans-serif",
        background: "#050810",
      }}
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

        .glow-text {
          text-shadow: 0 0 40px rgba(0,240,255,0.5), 0 0 80px rgba(0,240,255,0.2);
        }

        .card-glow {
          box-shadow: 0 0 0 1px var(--cyan-border), 0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,240,255,0.08);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .card-glow:hover {
          box-shadow: 0 0 0 1px rgba(0,240,255,0.5), 0 16px 48px rgba(0,240,255,0.12), inset 0 1px 0 rgba(0,240,255,0.15);
          transform: translateY(-4px);
        }

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
          to { transform: scaleX(1); }
        }

        .hex-badge {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .scan-line::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
          pointer-events: none;
        }

        .mono { font-family: 'JetBrains Mono', monospace; }

        .tag-pill {
          background: rgba(0,240,255,0.08);
          border: 1px solid rgba(0,240,255,0.2);
          color: #00f0ff;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #00f0ff;
          opacity: 0.7;
        }

        .avatar-ring {
          background: conic-gradient(from 0deg, #00f0ff, #0044ff, #00f0ff 60%, transparent 70%, transparent 100%);
          padding: 3px;
          border-radius: 50%;
        //   animation: spinSlow 8s linear infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 200px;
          opacity: 0.5;
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
        className="grid-bg relative z-10"
        style={{ paddingTop: 100, paddingBottom: 100 }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <motion.div {...fadeInUp(0)} style={{ marginBottom: 20 }}>
            <span className="tag-pill">Instructor Profile</span>
          </motion.div>

          {/* Avatar */}
          <motion.div
            {...fadeInUp(0.1)}
            style={{ marginBottom: 32, position: "relative" }}
          >
            <div
              className="avatar-ring"
              style={{ display: "inline-block", borderRadius: "50%" }}
            >
              <div
                style={{
                  background: "#050810",
                  borderRadius: "50%",
                  padding: 4,
                }}
              >
                <Image
                  src="/Adib.png"
                  alt="Saleh Adib Hasnat"
                  width={160}
                  height={160}
                  style={{
                    borderRadius: "50%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            {/* Online badge */}
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
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 800,
              color: "#00f0ff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Saleh Adib Hasnat
          </motion.h1>

          <motion.p
            {...fadeInUp(0.3)}
            style={{
              color: "var(--text-body)",
              fontSize: "1.1rem",
              maxWidth: 620,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            A multi-faceted Full-Stack MERN Developer, Figma Designer, WordPress
            Expert, Script Writer, Debater & Stage Actor from Gopalganj,
            Bangladesh. I just try everything — sometimes I do great things,
            sometimes I fail, but that's my way of life.
          </motion.p>

          {/* Stats */}
          <motion.div
            {...fadeInUp(0.4)}
            style={{
              display: "flex",
              gap: 40,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  className="mono"
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    color: "#00f0ff",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
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
      </div>

      {/* ─── ABOUT ─── */}
      <div
        style={{
          background: "#0a0f1e",
          position: "relative",
          zIndex: 10,
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <motion.div {...fadeInUp(0)}>
            <div className="section-label" style={{ marginBottom: 12 }}>
              // about me
            </div>
            <h2
              style={{
                fontSize: "2.4rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Who I <span style={{ color: "#00f0ff" }}>Am?</span>
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                lineHeight: 1.9,
                marginBottom: 16,
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
                fontSize: "0.95rem",
              }}
            >
              I wear many hats — developer, designer, script writer, stage
              actor, debater, former scout, speaker, and more. My teaching style
              is built around real-world projects, live mentorship, and
              portfolio-building so students graduate ready for the industry.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp(0.2)}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
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
                  padding: "16px 20px",
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: "10px",
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
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── SKILLS ─── */}
      <div
        style={{
          background: "#050810",
          position: "relative",
          zIndex: 10,
          padding: "80px 24px",
        }}
        className="grid-bg"
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div
            {...fadeInUp(0)}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <div className="section-label" style={{ marginBottom: 12 }}>
              // technical skills
            </div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, color: "#fff" }}>
              My <span style={{ color: "#00f0ff" }}>Speciality</span>
            </h2>
          </motion.div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp(0.05 * idx)}
                className="card-glow"
                style={{
                  background: "#0a0f1e",
                  borderRadius: 14,
                  padding: "24px 28px",
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
                      fontSize: "0.95rem",
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
        style={{
          background: "#0a0f1e",
          position: "relative",
          zIndex: 10,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div
            {...fadeInUp(0)}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <div className="section-label" style={{ marginBottom: 12 }}>
              // what i do
            </div>
            <h2
              style={{
                fontSize: "2.4rem",
                fontWeight: 700,
                color: "#fff",
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              I design and develop services for customers of{" "}
              <span style={{ color: "#00f0ff" }}>all sizes</span>
            </h2>
          </motion.div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {services.map((svc, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp(0.05 * idx)}
                className="card-glow"
                style={{
                  background: "#0d1525",
                  borderRadius: 16,
                  padding: "28px 28px",
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
                    fontSize: "1.05rem",
                    marginBottom: 8,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
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
        style={{
          background: "#050810",
          position: "relative",
          zIndex: 10,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div
            {...fadeInUp(0)}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <div className="section-label" style={{ marginBottom: 12 }}>
              // education
            </div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, color: "#fff" }}>
              My Overall <span style={{ color: "#00f0ff" }}>Studies</span>
            </h2>
          </motion.div>
          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: 20,
                top: 0,
                bottom: 0,
                width: 1,
                background: "linear-gradient(to bottom, #00f0ff, transparent)",
                opacity: 0.3,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 28,
                paddingLeft: 56,
              }}
            >
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp(0.1 * idx)}
                  style={{ position: "relative" }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -44,
                      top: 20,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#00f0ff",
                      boxShadow: "0 0 12px #00f0ff",
                    }}
                  />
                  <div
                    className="card-glow"
                    style={{
                      background: "#0a0f1e",
                      borderRadius: 16,
                      padding: "24px 28px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 8,
                        marginBottom: 8,
                      }}
                    >
                      <h3 style={{ color: "#e0f4ff", fontWeight: 700 }}>
                        {edu.degree}
                      </h3>
                      <span className="tag-pill">{edu.year}</span>
                    </div>
                    <p
                      style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}
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
        style={{
          background: "#0a0f1e",
          position: "relative",
          zIndex: 10,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <motion.div {...fadeInUp(0)}>
            <div className="section-label" style={{ marginBottom: 16 }}>
              // teaching philosophy
            </div>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 24,
              }}
            >
              Learning by <span style={{ color: "#00f0ff" }}>Doing</span>
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "1.1rem",
                lineHeight: 1.9,
                marginBottom: 40,
              }}
            >
              Saleh believes the best way to learn web development is to
              actually build things. Students work on real projects from day one
              — deploying apps, writing production code, and receiving live code
              reviews and portfolio feedback to prepare for the real world.
            </p>
            <div
              style={{
                display: "flex",
                gap: 20,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
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
        style={{
          background: "#050810",
          position: "relative",
          zIndex: 10,
          padding: "80px 24px",
          textAlign: "center",
        }}
        className="grid-bg"
      >
        <motion.div {...fadeInUp(0)}>
          <div className="section-label" style={{ marginBottom: 16 }}>
            // hire me
          </div>
          <h2
            className="glow-text"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#00f0ff",
              marginBottom: 16,
            }}
          >
            Let's discuss your project
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: 36,
              fontSize: "1.05rem",
            }}
          >
            Always available for freelancing if the right project comes along.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.fiverr.com/salehadib007/"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "linear-gradient(135deg, #00f0ff, #0055ff)",
                color: "#050810",
                padding: "14px 32px",
                borderRadius: 999,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
                letterSpacing: "0.03em",
                boxShadow: "0 0 30px rgba(0,240,255,0.35)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              Hire Me on Fiverr
            </a>
            <a
              href="mailto:salehadib007@gmail.com"
              style={{
                background: "transparent",
                color: "#00f0ff",
                padding: "14px 32px",
                borderRadius: 999,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
                border: "1px solid rgba(0,240,255,0.35)",
                letterSpacing: "0.03em",
              }}
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
