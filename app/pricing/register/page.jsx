"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Section from "../components/Section";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage temporarily
    localStorage.setItem("studentInfo", JSON.stringify(form));

    router.push("/payment");
  };

  return (
    <Section className="min-h-screen flex items-center">
      <div className="card w-full max-w-md mx-auto shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">
            Student Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <button className="btn btn-primary w-full">
              Continue to Payment
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
