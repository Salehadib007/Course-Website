"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─── FONTS ──────────────────────────────────────────────────────────────── */
const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');`;

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const avatarUrls = [
  "/rahim.jpg",
  "/ayesha.jpg",
  "/hasan.jpg",
  "/samira.jfif",
  "/rafi.jpg",
  "/nabila.jpg",
  "/omar.jpg",
  "/fatema.jpg",
  "/imran.jpg",
  "/sadia.jpg",
];

const testimonials = [
  {
    name: "Rahim",
    handle: "@rahim_dev",
    text: "এই কোর্স আমার ক্যারিয়ার পরিবর্তন করেছে। আমি আমার নিজস্ব পোর্টফোলিও তৈরি করেছি এবং ক্লায়েন্টও পেয়েছি।",
    platform: "Twitter",
    stars: 5,
  },
  {
    name: "Ayesha",
    handle: "@ayesha.codes",
    text: "স্পষ্ট ব্যাখ্যা, বাস্তব প্রজেক্ট, এবং শক্তিশালী মেন্টরশিপ। ঠিক যেটা আমি খুঁজছিলাম।",
    platform: "Instagram",
    stars: 5,
  },
  {
    name: "Hasan",
    handle: "@hasan_builds",
    text: "ফুল-স্ট্যাক ডেভেলপমেন্ট শেখার জন্য সেরা বিনিয়োগ। কারিকুলামটি গভীর এবং আপডেটেড।",
    platform: "LinkedIn",
    stars: 5,
  },
  {
    name: "Samira",
    handle: "@samira_ai",
    text: "এআই টুলস সেকশনটি ভালো লেগেছে। এটি আমাকে অনেক কাজ স্বয়ংক্রিয় করতে সাহায্য করেছে এবং আমার কাজের গতি ১০ গুণ বেড়েছে।",
    platform: "Twitter",
    stars: 5,
  },
  {
    name: "Rafi",
    handle: "@rafi.io",
    text: "হ্যান্ডস-অন প্রজেক্টগুলো ঠিক যেমনটা আমি প্রথম ডেভ জব পাওয়ার জন্য চাইছিলাম। সবার জন্য রিকোমেন্ডেড।",
    platform: "Instagram",
    stars: 5,
  },
  {
    name: "Nabila",
    handle: "@nabila_dev",
    text: "মেন্টররা অসাধারণ। সবসময় প্রশ্নের উত্তর দিতে এবং আশা থেকে বেশি এগিয়ে যেতে সাহায্য করে।",
    platform: "LinkedIn",
    stars: 5,
  },
  {
    name: "Omar",
    handle: "@omartech",
    text: "আমি এখন জব-রেডি অনুভব করছি। এই কোর্স সত্যিই ফিউচারিস্টিক এবং এআই-ফ্রেন্ডলি — এরকম আর কিছু নেই।",
    platform: "Twitter",
    stars: 5,
  },
  {
    name: "Fatema",
    handle: "@fatema_codes",
    text: "কমিউনিটি সাপোর্ট চমৎকার! আমি সহপাঠীদের কাছ থেকেও যতটা শিখেছি, ততটাই মডিউল থেকে শিখেছি।",
    platform: "Instagram",
    stars: 5,
  },
  {
    name: "Imran",
    handle: "@imran.build",
    text: "থিওরি এবং প্র্যাকটিসের সঠিক সমন্বয়। স্ট্রাকচার্ড অ্যাসাইনমেন্ট এবং লাইভ ফিডব্যাক সেশনগুলো খুব ভালো লেগেছে।",
    platform: "LinkedIn",
    stars: 5,
  },
  {
    name: "Sadia",
    handle: "@sadia_learns",
    text: "এআই-ফোকাসড মডিউলগুলো আমার প্রোডাক্টিভিটির জন্য এক গেম-চেঞ্জার ছিল।",
    platform: "Twitter",
    stars: 5,
  },
];
const PLATFORM_COLORS = {
  Twitter: "#1d9bf0",
  Instagram: "#e1306c",
  LinkedIn: "#0a66c2",
};

const PLATFORM_ICONS = {
  Twitter: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

/* ─── STAR ROW ───────────────────────────────────────────────────────────── */
function Stars({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#f0c040">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── CARD ───────────────────────────────────────────────────────────────── */
function TestimonialCard({ t, index }) {
  const platformColor = PLATFORM_COLORS[t.platform] || "#00f0ff";

  return (
    <div
      style={{
        position: "relative",
        background:
          "linear-gradient(135deg, rgba(12,16,28,0.97) 0%, rgba(8,11,20,0.97) 100%)",
        border: "1px solid rgba(0,240,255,0.12)",
        borderRadius: 16,
        padding: "28px 26px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        transition:
          "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
        cursor: "default",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 0 0 1px rgba(0,240,255,0.25), 0 24px 60px rgba(0,0,0,0.7), 0 0 50px rgba(0,240,255,0.1)";
        e.currentTarget.style.borderColor = "rgba(0,240,255,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.5)";
        e.currentTarget.style.borderColor = "rgba(0,240,255,0.12)";
      }}
    >
      {/* Top glow stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent 0%, ${platformColor}55 50%, transparent 100%)`,
        }}
      />

      {/* Index badge */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          color: "rgba(0,240,255,0.25)",
          letterSpacing: "0.1em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Quote mark */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 20,
          fontFamily: "Georgia, serif",
          fontSize: 72,
          lineHeight: 1,
          color: "rgba(0,240,255,0.05)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        "
      </div>

      {/* Avatar + Name */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{ position: "relative", width: 52, height: 52, flexShrink: 0 }}
        >
          <div
            style={{
              position: "absolute",
              inset: -2,
              borderRadius: "50%",
              border: `1.5px solid ${platformColor}88`,
              boxShadow: `0 0 12px ${platformColor}44`,
            }}
          />
          <img
            src={avatarUrls[index % avatarUrls.length]}
            alt={t.name}
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              objectFit: "cover",
              display: "block",
            }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            style={{
              display: "none",
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${platformColor}44, rgba(0,0,0,0.8))`,
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: platformColor,
            }}
          >
            {t.name[0]}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: "#e8f4f8",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: `${platformColor}bb`,
              marginTop: 2,
              letterSpacing: "0.02em",
            }}
          >
            {t.handle}
          </div>
          <div style={{ marginTop: 5 }}>
            <Stars count={t.stars} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 10px",
            background: `${platformColor}14`,
            border: `1px solid ${platformColor}33`,
            borderRadius: 20,
            color: platformColor,
            fontSize: 11,
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.05em",
            flexShrink: 0,
          }}
        >
          {PLATFORM_ICONS[t.platform]}
        </div>
      </div>

      {/* Quote text */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "16px 18px",
          background: "rgba(0,240,255,0.03)",
          border: "1px solid rgba(0,240,255,0.07)",
          borderLeft: `2px solid ${platformColor}66`,
          borderRadius: 10,
          flex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 13.5,
            lineHeight: 1.75,
            color: "rgba(220,240,248,0.82)",
            margin: 0,
          }}
        >
          {t.text}
        </p>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cols, setCols] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);
  const trackRef = useRef(null);

  // Responsive columns
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCols(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goTo = useCallback(
    (newIndex, dir) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      const track = trackRef.current;
      if (!track) return;

      // Slide out: move track in the exit direction
      const outX = dir === 1 ? "-100%" : "100%";
      track.style.transition = "none";
      track.style.transform = "translateX(0%)";

      // Force reflow
      track.getBoundingClientRect();

      track.style.transition =
        "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      track.style.transform = `translateX(${outX})`;

      setTimeout(() => {
        // Instantly snap to incoming position (opposite side), no transition
        track.style.transition = "none";
        const inX = dir === 1 ? "100%" : "-100%";
        track.style.transform = `translateX(${inX})`;

        setActiveIndex(newIndex);

        // Force reflow so the new cards paint at inX before sliding in
        track.getBoundingClientRect();

        // Slide in to center
        track.style.transition =
          "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        track.style.transform = "translateX(0%)";

        setTimeout(() => {
          setIsTransitioning(false);
        }, 560);
      }, 560);
    },
    [isTransitioning],
  );

  const advance = useCallback(() => {
    const next = (activeIndex + 1) % testimonials.length;
    goTo(next, 1);
  }, [activeIndex, goTo]);

  const goBack = useCallback(() => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    goTo(prev, -1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(advance, 4500);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 4500);
  };

  // Visible slice
  const visible = [];
  for (let i = 0; i < cols; i++) {
    visible.push({
      t: testimonials[(activeIndex + i) % testimonials.length],
      index: (activeIndex + i) % testimonials.length,
    });
  }

  return (
    <>
      <style>{FONT_IMPORT}</style>
      <style>{`
        @keyframes gridPulse { 0%,100%{opacity:.025} 50%{opacity:.055} }
        @keyframes floatA { 0%,100%{transform:translateY(0) translateX(0)} 33%{transform:translateY(-18px) translateX(8px)} 66%{transform:translateY(8px) translateX(-12px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      `}</style>

      <section
        style={{
          position: "relative",
          background: "#040810",
          padding: "100px 0 110px",
          overflow: "hidden",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,240,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            animation: "gridPulse 5s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Ambient orbs */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,240,255,.07) 0%, transparent 70%)",
            top: "-15%",
            left: "-10%",
            animation: "floatA 12s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(120,80,200,.06) 0%, transparent 70%)",
            bottom: "-10%",
            right: "-8%",
            animation: "floatB 9s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
                padding: "6px 18px",
                border: "1px solid rgba(0,240,255,0.2)",
                borderRadius: 30,
                background: "rgba(0,240,255,0.05)",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00f0ff",
                  boxShadow: "0 0 8px #00f0ff",
                  animation: "floatB 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.35em",
                  color: "rgba(0,240,255,0.7)",
                  textTransform: "uppercase",
                }}
              >
                Student Voices
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                color: "#ffffff",
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
              }}
            >
              শিক্ষার্থীদের{" "}
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(135deg, #00f0ff 0%, #7b5ea7 60%, #ff6b9d 100%)",
                  backgroundClip: "text",
                }}
              >
                মতামত
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(0,240,255,0.55)",
                maxWidth: 480,
                margin: "0 auto",
                letterSpacing: "0.03em",
              }}
            >
              শিক্ষার্থীদের আসল প্রতিক্রিয়া যারা তাদের ক্যারিয়ারকে নতুন
              উচ্চতায় নিয়ে গেছে
            </p>
          </div>

          {/* Slider viewport */}
          <div style={{ overflow: "hidden", borderRadius: 4 }}>
            <div
              ref={trackRef}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gap: 20,
                alignItems: "stretch",
                willChange: "transform",
              }}
            >
              {visible.map(({ t, index }) => (
                <TestimonialCard key={index} t={t} index={index} />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              marginTop: 48,
            }}
          >
            {/* Prev */}
            <button
              onClick={() => {
                goBack();
                resetTimer();
              }}
              style={{
                width: 42,
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,240,255,0.05)",
                border: "1px solid rgba(0,240,255,0.2)",
                borderRadius: "50%",
                color: "rgba(0,240,255,0.7)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,240,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(0,240,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,240,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(0,240,255,0.2)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {testimonials.map((_, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      const dir = i > activeIndex ? 1 : -1;
                      goTo(i, dir);
                      resetTimer();
                    }}
                    style={{
                      width: isActive ? 24 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: isActive ? "#00f0ff" : "rgba(0,240,255,0.2)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s ease",
                      boxShadow: isActive ? "0 0 10px #00f0ff88" : "none",
                      outline: "none",
                    }}
                  />
                );
              })}
            </div>

            {/* Next */}
            <button
              onClick={() => {
                advance();
                resetTimer();
              }}
              style={{
                width: 42,
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,240,255,0.05)",
                border: "1px solid rgba(0,240,255,0.2)",
                borderRadius: "50%",
                color: "rgba(0,240,255,0.7)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,240,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(0,240,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,240,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(0,240,255,0.2)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <div
            style={{
              textAlign: "center",
              marginTop: 20,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "rgba(0,240,255,0.3)",
              letterSpacing: "0.25em",
            }}
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </div>
        </div>
      </section>
    </>
  );
}
