"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

/**
 * Header component that displays the site title, navigation links and a dark mode toggle.
 * Theme preference is persisted to localStorage and read on mount.
 */
export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // initialize dark mode based on saved preference or system setting
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-bold text-hbk-slate dark:text-hbk-oat">
          Home Blend Kitchen
        </Link>
        <nav className="hidden sm:flex gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/recipes" className="hover:underline">Recipes</Link>
          <Link href="/builder" className="hover:underline">Builder</Link>
        </nav>
      </div>
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="text-2xl focus:outline-none"
      >
        {isDark ? "🌙" : "☀️"}
      </button>
    </header>
  );
}