"use client";
import React from "react";

/**
 * HeroSection presents the primary marketing message for the site. It uses a soft gradient
 * background that responds to dark mode and centers the content.
 */
export default function HeroSection() {
  return (
    <section className="px-6 py-20 text-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-700">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-hbk-slate dark:text-hbk-oat">
        Nourishment, Naturally
      </h2>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
        Clinically trusted blenderized nutrition for every body.
      </p>
    </section>
  );
}