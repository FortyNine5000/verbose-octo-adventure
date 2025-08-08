"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import recipesData from "../../data/recipes.json";
import ingredientsData from "../../data/ingredients.json";

/**
 * RecipeDetailPage renders details for a single recipe based on the dynamic route parameter.
 */
export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const recipes: any[] = recipesData as any;
  const ingredients: any[] = ingredientsData as any;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-6 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900">
        <h1 className="text-2xl font-bold text-hbk-slate dark:text-hbk-oat">Recipe not found</h1>
        <Link href="/recipes" className="mt-4 inline-block text-hbk-teal hover:underline">
          Back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 space-y-6">
      <Link href="/recipes" className="text-hbk-teal hover:underline">
        &larr; Back to recipes
      </Link>
      <h1 className="text-3xl font-bold text-hbk-slate dark:text-hbk-oat">{recipe.name}</h1>
      <p className="text-lg text-slate-700 dark:text-slate-300">{recipe.description}</p>
      <div>
        <h2 className="text-2xl font-semibold mt-6 text-hbk-slate dark:text-hbk-oat">Ingredients</h2>
        <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
          {recipe.ingredients.map((item: any) => {
            const ing = ingredients.find((i) => i.id === item.id);
            return (
              <li key={item.id}>
                {ing ? ing.name : item.id}: {item.grams}g
              </li>
            );
          })}
        </ul>
      </div>
      {recipe.notes && (
        <div>
          <h3 className="text-xl font-semibold mt-6 text-hbk-slate dark:text-hbk-oat">Notes</h3>
          <p className="mt-1 text-slate-700 dark:text-slate-300">{recipe.notes}</p>
        </div>
      )}
    </div>
  );
}