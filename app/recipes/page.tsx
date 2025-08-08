import { useState } from "react";
import recipes from "@/app/data/recipes.json";
import ingredients from "@/app/data/ingredients.json";

type Recipe = {
  id: string;
  name: string;
  tags?: string[];
  ingredients: { id: string; grams: number }[];
};

const getPreviewIngredients = (ingredientIds: string[]) => {
  return ingredientIds
    .map((id) => ingredients.find((i) => i.id === id)?.name)
    .filter(Boolean)
    .slice(0, 3)
    .join(", ");
};

export default function RecipesPage() {
  const [search, setSearch] = useState("");

  const filtered = recipes.filter((r: Recipe) => {
    return r.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Library</h1>
      <input
        className="mb-4 border rounded px-2 py-1 w-full max-w-md"
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r: Recipe) => (
          <a key={r.id} href={"/recipes/" + r.id} className="border p-4 rounded shadow hover:shadow-md transition">
            <h2 className="font-semibold text-lg mb-1">{r.name}</h2>
            <p className="text-sm text-hbk-slate mb-1">
              {getPreviewIngredients(r.ingredients.map((i) => i.id))}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {r.tags?.map((tag) => (
                <span key={tag} className="text-xs bg-hbk-sage text-white px-2 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
