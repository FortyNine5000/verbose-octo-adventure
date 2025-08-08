"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import recipesData from "../data/recipes.json";
import ingredientsData from "../data/ingredients.json";

/**
 * RecipesPage lists all recipes and provides a simple filter by name.
 */
export default function RecipesPage() {
  const recipes: any[] = recipesData as any;
  const ingredients: any[] = ingredientsData as any;
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recipes;
    return recipes.filter((r) =>
      r.name.toLowerCase().includes(q) ||
      (r.description && r.description.toLowerCase().includes(q)) ||
      r.ingredients.some((i: any) => {
        const ing = ingredients.find((it) => it.id === i.id);
        return ing && ing.name.toLowerCase().includes(q);
      })
    );
  }, [recipes, ingredients, query]);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 space-y-6">
      <h1 className="text-3xl font-bold text-hbk-slate dark:text-hbk-oat">Recipe Library</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes…"
        className="border border-slate-300 dark:border-slate-700 rounded px-3 py-2 w-full max-w-md text-hbk-slate dark:text-hbk-oat bg-white dark:bg-slate-800 placeholder-slate-500"
      />
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((recipe) => (
          <li
            key={recipe.id}
            className="border border-slate-200 dark:border-slate-700 rounded-xl p-5 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg text-hbk-slate dark:text-hbk-oat">
                {recipe.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {recipe.description}
              </p>
            </div>
            <Link
              href={`/recipes/${recipe.id}`}
              className="mt-4 text-hbk-teal hover:underline font-medium"
            >
              View details
            </Link>
          </li>
        ))}
        {filtered.length === 0 && <li>No recipes found.</li>}
      </ul>
    </div>
  );
}