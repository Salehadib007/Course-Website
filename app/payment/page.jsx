"use client";

import { useState, useMemo, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const FALLBACK = {
  id: "course",
  name: "Full-Stack Web Development Course",
  price: 18000,
  duration: "6 months",
  badge: "Most Popular",
  features: [
    "1:1 Mentoring",
    "Live Sessions",
    "Portfolio Projects",
    "Certificate",
  ],
};

const PAYMENT_NUMBERS = {
  bkash: {
    number: "01572912789",
    label: "bKash",
    color: "#e2136e",
    bg: "rgba(226,19,110,0.1)",
  },
  nagad: {
    number: "01317136420",
    label: "Nagad",
    color: "#f7941d",
    bg: "rgba(247,148,29,0.1)",
  },
};

const slideIn = {
  initial: { opacity: 0, x: -16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 16 },
  transition: { duration: 0.35 },
};
const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};

function PaymentPageInner() {
  const searchParams = useSearchParams();

  const pkg = useMemo(
    () => ({
      id: searchParams.get("course") || FALLBACK.id,
      name: searchParams.get("name") || FALLBACK.name,
      price: Number(searchParams.get("price")) || FALLBACK.price,
      duration: searchParams.get("duration") || FALLBACK.duration,
      badge:
        searchParams.get("course") === "fullstack"
          ? "Most Popular"
          : "Enrolled",
      features: FALLBACK.features,
    }),
    [searchParams],
  );

  const [step, setStep] = useState(1);
  const [method, setMethod] = useState("bkash");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    transactionId: "",
  });
  const [errors, setErrors] = useState({});

  const active = PAYMENT_NUMBERS[method];

  const copyNumber = useCallback(() => {
    navigator.clipboard.writeText(PAYMENT_NUMBERS[method].number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [method]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  }, []);

  const validate = useCallback(() => {
    const e = {};
    if (!formData.name.trim()) e.name = "Required";
    if (!formData.email.includes("@")) e.email = "Valid email required";
    if (formData.phone.length < 11) e.phone = "Valid phone required";
    if (formData.transactionId.length < 6)
      e.transactionId = "Enter valid TX ID";
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validate()) return;
      try {
        const res = await fetch("/api/enrollment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ package: pkg.id, method, ...formData }),
        });
        const data = await res.json();
        if (!res.ok) {
          alert(data.error || "Something went wrong.");
          return;
        }
        setStep(3);
      } catch (err) {
        console.error(err);
        alert("Network error. Please try again.");
      }
    },
    [validate, pkg.id, method, formData],
  );

  const priceFormatted = useMemo(() => pkg.price.toLocaleString(), [pkg.price]);

  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <div className="pp-root">
        {/* Header */}
        <div className="pp-header pp-grid-bg ">
          <div className="pp-container">
            <div className="pp-eyebrow mono pt-15">// ENROLLMENT</div>
            <h1 className="pp-title">Complete Your Enrollment</h1>
            <p className="pp-subtitle">
              Secure your spot with a manual payment via bKash or Nagad.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="pp-container pp-steps-wrap">
          <div className="pp-steps">
            {["Package", "Payment", "Confirm"].map((label, i) => {
              const s = i + 1,
                done = step > s,
                isActive = step === s;
              return (
                <div
                  key={i}
                  className={`pp-step-item${i < 2 ? " pp-step-item--flex" : ""}`}
                >
                  <div className="pp-step-circle-wrap">
                    <div
                      className={`pp-step-circle${done ? " done" : isActive ? " active" : ""}`}
                    >
                      {done ? "✓" : s}
                    </div>
                    <span
                      className={`pp-step-label${isActive ? " active" : ""}`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className={`pp-step-line${step > s ? " done" : ""}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main grid */}
        <div className="pp-container pp-grid">
          {/* LEFT — main content */}
          <div>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" {...slideIn}>
                  <div className="pp-card">
                    <div className="pp-card-header">
                      <div className="pp-card-header-row">
                        <div className="pp-pkg-info">
                          <span className="pp-badge">{pkg.badge}</span>
                          <h2 className="pp-pkg-name">{pkg.name}</h2>
                          <p className="pp-pkg-duration">
                            Duration: {pkg.duration}
                          </p>
                        </div>
                        <div className="pp-price-block">
                          <div className="pp-price mono">৳{priceFormatted}</div>
                          <div className="pp-price-sub">One-time payment</div>
                        </div>
                      </div>
                    </div>
                    <div className="pp-card-body">
                      <p className="pp-section-label">What's Included</p>
                      <div className="pp-features">
                        {pkg.features.map((f, i) => (
                          <div key={i} className="pp-check-item">
                            <div className="pp-check-icon">
                              <span>✓</span>
                            </div>
                            {f}
                          </div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStep(2)}
                        className="pp-btn-primary pp-btn-full"
                      >
                        Proceed to Payment →
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" {...slideIn}>
                  <div className="pp-card pp-card--pad">
                    <p className="pp-section-label">Payment Method</p>
                    <div className="pp-methods">
                      {Object.entries(PAYMENT_NUMBERS).map(([key, val]) => (
                        <button
                          key={key}
                          onClick={() => setMethod(key)}
                          className="pp-method-btn"
                          style={{
                            background:
                              method === key
                                ? val.bg
                                : "rgba(255,255,255,0.04)",
                            borderColor:
                              method === key
                                ? val.color
                                : "rgba(255,255,255,0.1)",
                            color:
                              method === key
                                ? val.color
                                : "rgba(255,255,255,0.4)",
                          }}
                        >
                          {val.label}
                        </button>
                      ))}
                    </div>

                    <div
                      className="pp-payment-box"
                      style={{
                        background: `${active.color}10`,
                        borderColor: `${active.color}30`,
                      }}
                    >
                      <div>
                        <div className="pp-payment-box-label">
                          Send Money to
                        </div>
                        <div
                          className="pp-payment-number mono"
                          style={{ color: active.color }}
                        >
                          {active.number}
                        </div>
                        <div className="pp-payment-box-sub">
                          Amount: ৳{priceFormatted} — Send Money
                        </div>
                      </div>
                      <button className="pp-copy-btn" onClick={copyNumber}>
                        {copied ? "✓ Copied" : "Copy"}
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="pp-form">
                      {[
                        {
                          name: "name",
                          label: "Full Name",
                          type: "text",
                          placeholder: "Your full name",
                        },
                        {
                          name: "email",
                          label: "Email Address",
                          type: "email",
                          placeholder: "you@email.com",
                        },
                        {
                          name: "phone",
                          label: "Phone Number",
                          type: "text",
                          placeholder: "01XXXXXXXXX",
                        },
                        {
                          name: "transactionId",
                          label: "Transaction ID",
                          type: "text",
                          placeholder: "TX ID from bKash/Nagad",
                        },
                      ].map((field) => (
                        <div key={field.name} className="pp-field">
                          <label className="pp-label">{field.label}</label>
                          <input
                            className={`pp-input${errors[field.name] ? " error" : ""}`}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleChange}
                          />
                          {errors[field.name] && (
                            <span className="pp-error">
                              {errors[field.name]}
                            </span>
                          )}
                        </div>
                      ))}
                      <div className="pp-form-actions">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="pp-btn-back"
                        >
                          ← Back
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="pp-btn-primary pp-btn-flex"
                        >
                          Confirm Enrollment
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" {...scaleIn}>
                  <div className="pp-card pp-card--success">
                    <div className="pp-success-icon">✓</div>
                    <h2 className="pp-success-title">Enrollment Submitted!</h2>
                    <p className="pp-success-body">
                      Your payment for <strong>{pkg.name}</strong> has been
                      submitted. We'll verify and confirm within 24 hours via
                      email.
                    </p>
                    <div className="pp-success-email-box">
                      <div className="pp-success-email-label">
                        Submitted Email
                      </div>
                      <div className="pp-success-email mono">
                        {formData.email}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT — Order Summary */}
          <div className="pp-sidebar">
            <div className="pp-card pp-card--no-overflow">
              <div className="pp-summary-header">
                <p className="pp-section-label">Order Summary</p>
                <div className="pp-summary-name-row">
                  <span className="pp-summary-name">{pkg.name}</span>
                  <span className="pp-badge">{pkg.badge}</span>
                </div>
                <div className="pp-summary-duration">{pkg.duration}</div>
              </div>
              <div className="pp-summary-features">
                {pkg.features.map((f, i) => (
                  <div key={i} className="pp-summary-feature">
                    <span className="pp-dot">✓</span> {f}
                  </div>
                ))}
              </div>
              <div className="pp-summary-totals">
                <div className="pp-summary-row">
                  <span>Subtotal</span>
                  <span>৳{priceFormatted}</span>
                </div>
                <div className="pp-summary-row">
                  <span>Processing Fee</span>
                  <span>৳0</span>
                </div>
                <div className="pp-summary-total">
                  <span>Total</span>
                  <span className="pp-total-amount mono">
                    ৳{priceFormatted}
                  </span>
                </div>
              </div>
            </div>
            <div className="pp-trust-items">
              {[
                "Manual verification within 24 hrs",
                "Secure & encrypted form",
                "Instant enrollment on approval",
              ].map((t, i) => (
                <div key={i} className="pp-trust-item">
                  <span className="pp-dot-cyan">●</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{CSS}</style>
      </div>
    </>
  );
}

function PaymentPageSkeleton() {
  return (
    <div className="pp-root pp-skeleton">
      <div className="pp-header pp-grid-bg">
        <div className="pp-container">
          <div className="pp-skel pp-skel--sm" />
          <div className="pp-skel pp-skel--lg" style={{ marginTop: 10 }} />
          <div className="pp-skel pp-skel--md" style={{ marginTop: 8 }} />
        </div>
      </div>
      <style>{CSS}</style>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<PaymentPageSkeleton />}>
      <PaymentPageInner />
    </Suspense>
  );
}

const CSS = `
  .pp-root *, .pp-root *::before, .pp-root *::after { box-sizing: border-box; }
  .pp-root {
    min-height: 100vh;
    background: #050810;
    color: #fff;
    font-family: 'Sora', sans-serif;
    padding-bottom: 80px;
  }
  .mono { font-family: 'JetBrains Mono', monospace; }

  /* ── Header ── */
  .pp-header { padding: 28px 20px 24px; border-bottom: 1px solid rgba(0,240,255,0.08); }
  .pp-grid-bg {
    background-image:
      linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .pp-eyebrow { font-size: 11px; color: #00f0ff; opacity: 0.6; letter-spacing: 0.2em; margin-bottom: 8px; }
  .pp-title   { font-size: clamp(1.4rem, 4vw, 2.4rem); font-weight: 800; margin: 0; line-height: 1.2; }
  .pp-subtitle { color: rgba(255,255,255,0.45); margin-top: 6px; font-size: clamp(0.82rem, 2vw, 0.9rem); }

  /* ── Container & Grid ── */
  .pp-container { max-width: 900px; margin: 0 auto; padding: 0 16px; }
  .pp-steps-wrap { padding-top: 24px; }

  /* Desktop: sidebar on right */
  .pp-grid {
    padding-top: 24px;
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 20px;
    align-items: start;
  }

  /* Mobile: stack sidebar below main content */
  @media (max-width: 700px) {
    .pp-container { padding: 0 14px; }
    .pp-header { padding: 20px 14px 18px; }
    .pp-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    /* Move sidebar below the main card on mobile */
    .pp-sidebar { order: 2; position: static; }
  }

  /* ── Steps ── */
  .pp-steps { display: flex; align-items: center; max-width: 320px; }
  .pp-step-item { display: flex; align-items: center; }
  .pp-step-item--flex { flex: 1; }
  .pp-step-circle-wrap { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .pp-step-circle {
    width: 28px; height: 28px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem; font-weight: 700;
    background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.4); transition: all 0.3s;
  }
  .pp-step-circle.active { background: rgba(0,240,255,0.15); border-color: #00f0ff; color: #00f0ff; }
  .pp-step-circle.done   { background: #00f0ff; border-color: #00f0ff; color: #050810; }
  .pp-step-label { font-size: 0.68rem; color: rgba(255,255,255,0.35); font-weight: 400; white-space: nowrap; }
  .pp-step-label.active { color: #00f0ff; font-weight: 600; }
  .pp-step-line { flex: 1; height: 1px; background: rgba(255,255,255,0.1); margin: 0 6px; margin-bottom: 18px; transition: background 0.4s; }
  .pp-step-line.done { background: #00f0ff; }

  /* ── Cards ── */
  .pp-card {
    background: #0a0f1e; border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px; overflow: hidden;
  }
  .pp-card--pad { padding: 20px; overflow: visible; }
  .pp-card--no-overflow { overflow: hidden; border-radius: 14px; }
  .pp-card--success { padding: 44px 20px; text-align: center; border-color: rgba(0,240,255,0.15); }

  /* ── Card header ── */
  .pp-card-header {
    padding: 20px 20px 16px; border-bottom: 1px solid rgba(255,255,255,0.06);
    background: linear-gradient(135deg, rgba(0,240,255,0.06) 0%, transparent 60%);
  }
  .pp-card-header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    flex-wrap: wrap;
  }
  .pp-pkg-info { flex: 1; min-width: 0; }
  .pp-card-body { padding: 20px; }

  /* ── Package info ── */
  .pp-badge {
    background: rgba(0,240,255,0.12); color: #00f0ff; border: 1px solid rgba(0,240,255,0.25);
    padding: 3px 10px; border-radius: 99px; font-size: 11px; font-weight: 700;
    display: inline-block;
  }
  .pp-pkg-name {
    margin-top: 10px; font-size: clamp(1.1rem, 3vw, 1.5rem);
    font-weight: 800; margin-bottom: 0; line-height: 1.3;
  }
  .pp-pkg-duration { color: rgba(255,255,255,0.4); font-size: 0.83rem; margin-top: 4px; }
  .pp-price-block { text-align: right; flex-shrink: 0; }
  .pp-price { font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 800; color: #00f0ff; line-height: 1; }
  .pp-price-sub { color: rgba(255,255,255,0.35); font-size: 0.75rem; margin-top: 4px; }

  /* ── Features ── */
  .pp-section-label {
    color: rgba(255,255,255,0.4); font-size: 0.72rem; letter-spacing: 0.1em;
    text-transform: uppercase; margin-bottom: 12px; margin-top: 0;
  }
  .pp-features { display: flex; flex-direction: column; gap: 10px; }
  .pp-check-item { display: flex; gap: 10px; align-items: flex-start; color: rgba(255,255,255,0.75); font-size: 0.88rem; line-height: 1.5; }
  .pp-check-icon {
    width: 16px; height: 16px; border-radius: 50%; background: rgba(0,240,255,0.1);
    border: 1px solid rgba(0,240,255,0.3); display: flex; align-items: center;
    justify-content: center; flex-shrink: 0; margin-top: 1px;
  }
  .pp-check-icon span { color: #00f0ff; font-size: 9px; }

  /* ── Buttons ── */
  .pp-btn-primary {
    padding: 13px 16px; border-radius: 12px; border: none; cursor: pointer;
    font-family: 'Sora', sans-serif; font-weight: 700; font-size: 0.95rem;
    background: linear-gradient(135deg, #00f0ff, #0055ff); color: #050810;
  }
  .pp-btn-full { width: 100%; margin-top: 20px; }
  .pp-btn-flex { flex: 1; min-width: 0; }
  .pp-btn-back {
    padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);
    background: transparent; color: rgba(255,255,255,0.45); cursor: pointer;
    font-family: 'Sora', sans-serif; white-space: nowrap;
  }

  /* ── Payment method ── */
  .pp-methods { display: flex; gap: 10px; margin-bottom: 18px; }
  .pp-method-btn {
    flex: 1; padding: 12px 8px; border-radius: 12px; border: 2px solid transparent;
    cursor: pointer; font-family: 'Sora', sans-serif; font-weight: 700;
    font-size: 0.92rem; transition: all 0.2s ease;
  }
  .pp-payment-box {
    border: 1px solid; border-radius: 12px; padding: 14px 16px;
    display: flex; justify-content: space-between; align-items: center;
    gap: 12px; margin-bottom: 20px; flex-wrap: wrap;
  }
  .pp-payment-box-label { color: rgba(255,255,255,0.4); font-size: 0.72rem; margin-bottom: 4px; }
  .pp-payment-number { font-size: clamp(1rem, 3vw, 1.3rem); font-weight: 700; }
  .pp-payment-box-sub { color: rgba(255,255,255,0.3); font-size: 0.72rem; margin-top: 2px; }
  .pp-copy-btn {
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
    color: #fff; border-radius: 8px; padding: 8px 14px; cursor: pointer;
    font-size: 0.8rem; font-family: 'Sora', sans-serif; transition: background 0.2s;
    white-space: nowrap; flex-shrink: 0;
  }
  .pp-copy-btn:hover { background: rgba(255,255,255,0.12); }

  /* ── Form ── */
  .pp-form { display: flex; flex-direction: column; gap: 14px; }
  .pp-label { display: block; font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-bottom: 5px; }
  .pp-input {
    width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
    color: #fff; border-radius: 10px; padding: 12px 14px; font-size: 0.92rem;
    font-family: 'Sora', sans-serif; transition: border-color 0.2s, box-shadow 0.2s; outline: none;
  }
  .pp-input::placeholder { color: rgba(255,255,255,0.25); }
  .pp-input:focus { border-color: rgba(0,240,255,0.5); box-shadow: 0 0 0 3px rgba(0,240,255,0.08); }
  .pp-input.error { border-color: rgba(255,80,80,0.6); }
  .pp-error { color: #ff6060; font-size: 0.72rem; margin-top: 4px; display: block; }
  .pp-form-actions { display: flex; gap: 10px; margin-top: 4px; }

  /* ── Success ── */
  .pp-success-icon {
    width: 64px; height: 64px; border-radius: 50%; background: rgba(0,240,255,0.1);
    border: 2px solid #00f0ff; display: flex; align-items: center; justify-content: center;
    margin: 0 auto 18px; font-size: 1.6rem;
    animation: scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .pp-success-title { font-size: clamp(1.3rem, 4vw, 1.7rem); font-weight: 800; margin-bottom: 10px; color: #00f0ff; }
  .pp-success-body { color: rgba(255,255,255,0.45); line-height: 1.8; max-width: 360px; margin: 0 auto 22px; font-size: 0.9rem; }
  .pp-success-body strong { color: #fff; }
  .pp-success-email-box {
    background: rgba(0,240,255,0.05); border: 1px solid rgba(0,240,255,0.15);
    border-radius: 10px; padding: 12px 16px; display: inline-block; max-width: 100%;
  }
  .pp-success-email-label { color: rgba(255,255,255,0.4); font-size: 0.72rem; margin-bottom: 4px; }
  .pp-success-email { color: #00f0ff; font-weight: 600; word-break: break-all; }

  /* ── Sidebar ── */
  .pp-sidebar { position: sticky; top: 20px; }
  .pp-summary-header { padding: 16px 18px; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .pp-summary-name-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; flex-wrap: wrap; }
  .pp-summary-name { font-weight: 700; font-size: 0.9rem; flex: 1; min-width: 0; line-height: 1.4; }
  .pp-summary-duration { color: rgba(255,255,255,0.35); font-size: 0.75rem; margin-top: 3px; }
  .pp-summary-features { padding: 12px 18px; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .pp-summary-feature { display: flex; gap: 8px; padding: 3px 0; color: rgba(255,255,255,0.5); font-size: 0.78rem; }
  .pp-dot { color: #00f0ff; font-size: 9px; margin-top: 3px; flex-shrink: 0; }
  .pp-summary-totals { padding: 12px 18px; }
  .pp-summary-row { display: flex; justify-content: space-between; color: rgba(255,255,255,0.35); font-size: 0.78rem; margin-bottom: 6px; }
  .pp-summary-total {
    display: flex; justify-content: space-between; align-items: center;
    border-top: 1px solid rgba(255,255,255,0.07); padding-top: 10px; font-weight: 700;
  }
  .pp-total-amount { font-size: 1.2rem; font-weight: 800; color: #00f0ff; }

  /* ── Trust ── */
  .pp-trust-items { margin-top: 12px; display: flex; flex-direction: column; gap: 6px; }
  .pp-trust-item { display: flex; gap: 8px; align-items: center; color: rgba(255,255,255,0.3); font-size: 0.73rem; }
  .pp-dot-cyan { color: #00f0ff; font-size: 9px; flex-shrink: 0; }

  /* ── Skeleton ── */
  .pp-skel {
    border-radius: 6px;
    background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
  }
  .pp-skel--sm { height: 12px; width: 120px; }
  .pp-skel--md { height: 14px; width: 220px; }
  .pp-skel--lg { height: 24px; width: min(280px, 80%); }

  @keyframes scaleIn  { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  @keyframes shimmer  { to { background-position: -200% 0; } }
`;
