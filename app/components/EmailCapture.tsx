"use client";
import React, { useState } from "react";

/**
 * EmailCapture component renders a simple newsletter signup form. It collects
 * an email address and shows a thank‑you message on submit. No external
 * request is made; this is purely front‑end and can later be wired to
 * a backend or third‑party service.
 */
export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // naive email validation
    if (email.trim().match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-hbk-teal to-hbk-sage dark:from-slate-800 dark:to-slate-700 text-center text-hbk-oat rounded-none">
      <h3 className="text-2xl font-semibold mb-4">Stay in the blend loop</h3>
      {submitted ? (
        <p className="text-lg">Thanks for signing up! We&rsquo;ll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-4 py-2 rounded-md border border-transparent focus:border-hbk-ink text-hbk-slate"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-hbk-coral text-white font-medium hover:bg-[#e3564c]"
          >
            Sign Up
          </button>
        </form>
      )}
    </section>
  );
}