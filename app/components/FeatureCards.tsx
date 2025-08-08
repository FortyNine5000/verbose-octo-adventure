"use client";
import React from "react";

// Define the feature list as an array of objects. Keeping the list outside of the component
// avoids recreating it on each render and makes it easy to extend later.
const features = [
  {
    title: "Organic Ingredients",
    description: "Only whole, organic foods make it into our blends. No fillers or additives.",
  },
  {
    title: "Tube‑Friendly",
    description: "Flows through even the smallest pediatric tubes for peace of mind.",
  },
  {
    title: "Pediatric‑Focused",
    description: "Designed with medically complex kids in mind and clinically reviewed.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-12 px-6 grid sm:grid-cols-1 md:grid-cols-3 gap-6 bg-white dark:bg-slate-800">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm bg-white dark:bg-slate-900"
        >
          <h3 className="text-xl font-semibold mb-2 text-hbk-slate dark:text-hbk-oat">
            {feature.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}