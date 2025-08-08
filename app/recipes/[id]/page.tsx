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
      <div className="border p-4 rounded">
        <h1 className="text-xl font-semibold">Recipe not found</h1>
        <Link href="/recipes" className="text-blue-600 underline mt-2 inline-block">
          Back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Link href="/recipes" className="text-blue-600 underline">
        &larr; Back to recipes
      </Link>
      <h1 className="text-2xl font-semibold">{recipe.name}</h1>
      <p className="text-gray-700">{recipe.description}</p>
      <h2 className="text-lg font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc list-inside space-y-1">
        {recipe.ingredients.map((item: any) => {
          const ing = ingredients.find((i) => i.id === item.id);
          return (
            <li key={item.id}>
              {ing ? ing.name : item.id}: {item.grams}g
            </li>
          );
        })}
      </ul>
      {recipe.notes && (
        <div>
          <h3 className="font-semibold mt-4">Notes</h3>
          <p className="text-gray-700">{recipe.notes}</p>
        </div>
      )}
    </div>
  );
}