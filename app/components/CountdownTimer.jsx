"use client";
import { useState, useEffect, useRef } from "react";

// ── CONFIG ──────────────────────────────────────────────────────────────────
const TARGET_DATE = new Date("2026-03-15T23:59:00"); // ← change this
const EVENT_LABEL = "Course Starts In"; // ← change this
// ────────────────────────────────────────────────────────────────────────────

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap');
`;

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      ms: Math.floor((diff % 1000) / 10),
      done: diff === 0,
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 50);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

function Digit({ value, label, accent }) {
  const prev = useRef(value);
  const [flash, setFlash] = useState(false);
  useEffect(() => {
    if (prev.current !== value) {
      setFlash(true);
      prev.current = value;
    }
  }, [value]);
  useEffect(() => {
    if (flash) {
      const t = setTimeout(() => setFlash(false), 300);
      return () => clearTimeout(t);
    }
  }, [flash]);

  const str = String(value).padStart(2, "0");

  return (
    <div style={styles.digitGroup}>
      <div
        style={{
          ...styles.digitBox,
          boxShadow: flash
            ? `0 0 30px ${accent}88, 0 0 60px ${accent}44, inset 0 0 20px ${accent}22`
            : `0 0 10px ${accent}44, inset 0 0 10px ${accent}11`,
        }}
      >
        {/* Scan line overlay */}
        <div style={styles.scanline} />
        {/* Corner accents */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{ ...styles.corner, ...cornerPos[i], borderColor: accent }}
          />
        ))}
        {/* Value */}
        <span
          style={{
            ...styles.digitValue,
            color: flash ? "#fff" : accent,
            textShadow: `0 0 20px ${accent}, 0 0 40px ${accent}88`,
          }}
        >
          {str}
        </span>
        {/* Bottom bar */}
        <div style={{ ...styles.bottomBar, background: accent }} />
      </div>
      <span style={{ ...styles.digitLabel, color: accent + "99" }}>
        {label}
      </span>
    </div>
  );
}

const cornerPos = [
  { top: 6, left: 6, borderTopWidth: 2, borderLeftWidth: 2 },
  { top: 6, right: 6, borderTopWidth: 2, borderRightWidth: 2 },
  { bottom: 6, left: 6, borderBottomWidth: 2, borderLeftWidth: 2 },
  { bottom: 6, right: 6, borderBottomWidth: 2, borderRightWidth: 2 },
];

function Separator({ accent }) {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn((o) => !o), 500);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={styles.sep}>
      <div
        style={{
          ...styles.sepDot,
          opacity: on ? 1 : 0.15,
          background: accent,
          boxShadow: `0 0 8px ${accent}`,
        }}
      />
      <div
        style={{
          ...styles.sepDot,
          opacity: on ? 0.15 : 1,
          background: accent,
          boxShadow: `0 0 8px ${accent}`,
        }}
      />
    </div>
  );
}

function ProgressRing({ progress, accent }) {
  const r = 54,
    c = 2 * Math.PI * r;
  return (
    <svg
      width="120"
      height="120"
      style={{ position: "absolute", top: -10, right: -10, opacity: 0.25 }}
    >
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke={accent}
        strokeWidth="1"
        strokeDasharray={`${c}`}
        strokeDashoffset={c * (1 - progress)}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
}

export default function CountdownTimer() {
  const { days, hours, minutes, seconds, ms, done } = useCountdown(TARGET_DATE);
  const totalSecs = Math.max(0, (TARGET_DATE - Date.now()) / 1000);
  const totalDuration = (TARGET_DATE - new Date("2026-01-01")) / 1000;
  const progress = 1 - totalSecs / totalDuration;

  const accent = done ? "#ff4466" : "#00f5d4";
  const accentB = done ? "#ff8844" : "#7b5ea7";

  return (
    <>
      <style>{FONTS}</style>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes scanMove { 0%{top:0%} 100%{top:100%} }
        @keyframes gridFade { 0%,100%{opacity:.03} 50%{opacity:.07} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      `}</style>
      <div style={styles.wrapper}>
        {/* Animated grid bg */}
        <div style={styles.grid} />
        {/* Glowing orbs */}
        <div
          style={{
            ...styles.orb,
            background: accent + "22",
            width: 400,
            height: 400,
            top: "10%",
            left: "5%",
            animationDelay: "0s",
          }}
        />
        <div
          style={{
            ...styles.orb,
            background: accentB + "22",
            width: 300,
            height: 300,
            bottom: "5%",
            right: "8%",
            animationDelay: "1.5s",
          }}
        />

        <div style={styles.card}>
          {/* Top bar */}
          <div
            style={{
              ...styles.topBar,
              background: `linear-gradient(90deg, transparent, ${accent}44, transparent)`,
            }}
          />

          {/* Header */}
          <div style={styles.header}>
            <div
              style={{
                ...styles.headerDot,
                background: accent,
                boxShadow: `0 0 8px ${accent}`,
              }}
            />
            <span style={{ ...styles.headerText, color: accent + "bb" }}>
              COUNTDOWN ACTIVE
            </span>
            <div
              style={{
                ...styles.headerDot,
                background: accent,
                boxShadow: `0 0 8px ${accent}`,
              }}
            />
          </div>

          {/* Event label */}
          <h1
            style={{
              ...styles.eventLabel,
              WebkitTextStroke: `1px ${accent}66`,
            }}
          >
            {done ? "TIME'S UP" : EVENT_LABEL}
          </h1>

          {/* Main digits */}
          <div style={styles.digits}>
            <div style={{ position: "relative" }}>
              <ProgressRing progress={days / 365} accent={accent} />
              <Digit value={days} label="DAYS" accent={accent} />
            </div>
            <Separator accent={accent} />
            <Digit value={hours} label="HOURS" accent={accent} />
            <Separator accent={accent} />
            <Digit value={minutes} label="MINUTES" accent={accent} />
            <Separator accent={accent} />
            <Digit value={seconds} label="SECONDS" accent={accent} />
          </div>

          {/* Milliseconds */}
          <div style={styles.msRow}>
            <span style={{ ...styles.msLabel, color: accent + "55" }}>MS</span>
            <span
              style={{
                ...styles.msValue,
                color: accent + "88",
                textShadow: `0 0 10px ${accent}44`,
              }}
            >
              {String(ms).padStart(2, "0")}
            </span>
          </div>

          {/* Target date display */}
          <div style={styles.targetRow}>
            <span style={{ ...styles.targetText, color: accent + "44" }}>
              TARGET →{" "}
              {TARGET_DATE.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
              AT{" "}
              {TARGET_DATE.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              ...styles.bottomBarFull,
              background: `linear-gradient(90deg, transparent, ${accentB}66, transparent)`,
            }}
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#040810",
    fontFamily: "'Rajdhani', sans-serif",
    overflow: "hidden",
    position: "relative",
  },
  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(0,245,212,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,.04) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    animation: "gridFade 4s ease-in-out infinite",
  },
  orb: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    animation: "float 4s ease-in-out infinite",
  },
  card: {
    position: "relative",
    background:
      "linear-gradient(135deg, rgba(10,18,30,.98) 0%, rgba(6,12,22,.98) 100%)",
    border: "1px solid rgba(0,245,212,.15)",
    borderRadius: 4,
    padding: "48px 56px",
    backdropFilter: "blur(20px)",
    boxShadow: "0 0 80px rgba(0,245,212,.05), 0 40px 80px rgba(0,0,0,.8)",
    minWidth: 620,
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    borderRadius: "4px 4px 0 0",
  },
  bottomBarFull: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    borderRadius: "0 0 4px 4px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 16,
  },
  headerDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
  },
  headerText: {
    fontFamily: "'Orbitron', monospace",
    fontSize: 11,
    letterSpacing: "0.4em",
    fontWeight: 400,
  },
  eventLabel: {
    fontFamily: "'Orbitron', monospace",
    fontSize: 28,
    fontWeight: 900,
    color: "#e8f4f8",
    textAlign: "center",
    letterSpacing: "0.15em",
    margin: "0 0 36px",
    textShadow: "0 0 40px rgba(0,245,212,.2)",
  },
  digits: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
  },
  digitGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    margin: "0 8px",
  },
  digitBox: {
    position: "relative",
    width: 96,
    height: 96,
    background: "rgba(0,245,212,.03)",
    border: "1px solid rgba(0,245,212,.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    transition: "box-shadow .3s ease",
  },
  scanline: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "30%",
    background:
      "linear-gradient(180deg, transparent, rgba(0,245,212,.04), transparent)",
    animation: "scanMove 3s linear infinite",
  },
  corner: {
    position: "absolute",
    width: 10,
    height: 10,
    borderStyle: "solid",
    borderWidth: 0,
    borderColor: "#00f5d4",
  },
  digitValue: {
    fontFamily: "'Orbitron', monospace",
    fontSize: 36,
    fontWeight: 700,
    position: "relative",
    zIndex: 1,
    transition: "color .3s, text-shadow .3s",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    opacity: 0.6,
  },
  digitLabel: {
    fontFamily: "'Orbitron', monospace",
    fontSize: 9,
    letterSpacing: "0.3em",
    fontWeight: 400,
  },
  sep: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    paddingBottom: 24,
    margin: "0 2px",
  },
  sepDot: {
    width: 4,
    height: 4,
    borderRadius: "50%",
    transition: "opacity .5s",
  },
  msRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 24,
  },
  msLabel: {
    fontFamily: "'Orbitron', monospace",
    fontSize: 9,
    letterSpacing: "0.3em",
  },
  msValue: {
    fontFamily: "'Orbitron', monospace",
    fontSize: 18,
    fontWeight: 700,
    minWidth: 32,
    textAlign: "center",
  },
  targetRow: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
  },
  targetText: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: 11,
    letterSpacing: "0.2em",
  },
};
