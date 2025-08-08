"use client";
import React from "react";

/**
 * AboutUs component displays information about the Home Blend Kitchen mission
 * and philosophy. It is used on the /about page and can be extended with
 * team profiles or more detailed content in future iterations.
 */
export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6 space-y-6">
      <h1 className="text-3xl font-bold text-hbk-slate dark:text-hbk-oat">Our Story</h1>
      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        Home Blend Kitchen began from the belief that medically complex individuals deserve
        the same quality of nourishment as everyone else. Our founders are parents
        and clinicians who understand firsthand the challenges of tube feeding. We
        craft blends with organic, whole ingredients and design tools to make
        home blending accessible for all.
      </p>
      <h2 className="text-2xl font-semibold text-hbk-slate dark:text-hbk-oat mt-8">Our Mission</h2>
      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        We strive to empower caregivers through transparency, education, and
        community. Every recipe, article and tool we build aims to simplify the
        blending journey, ensure safety, and celebrate the humanity behind every
        tube.
      </p>
      <h2 className="text-2xl font-semibold text-hbk-slate dark:text-hbk-oat mt-8">The Team</h2>
      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        Our small but mighty team combines backgrounds in nutrition, medicine,
        technology and lived experience. We&rsquo;re always growing and welcome
        collaboration from clinicians, dietitians and families who share our
        vision.
      </p>
    </div>
  );
}