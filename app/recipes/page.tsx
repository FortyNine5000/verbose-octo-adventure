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
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Recipe Library</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className="border rounded px-3 py-2 w-full max-w-sm"
      />
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((recipe) => (
          <li key={recipe.id} className="border rounded p-4">
            <h3 className="font-semibold text-lg">{recipe.name}</h3>
            <p className="text-sm text-gray-700">{recipe.description}</p>
            <Link
              href={`/recipes/${recipe.id}`}
              className="text-blue-600 underline inline-block mt-2"
            >
              View details
            </Link>
          </li>
        ))}
        {filtered.length === 0 && (
          <li>No recipes found.</li>
        )}
      </ul>
    </div>
  );
}