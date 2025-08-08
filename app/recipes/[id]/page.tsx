import { notFound } from "next/navigation";
import recipes from "@/app/data/recipes.json";
import ingredients from "@/app/data/ingredients.json";

type Ingredient = {
  id: string;
  grams: number;
};

export default function RecipeDetail({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === params.id);
  if (!recipe) return notFound();

  const getIngredientName = (id: string) =>
    ingredients.find((i) => i.id === id)?.name || id;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">{recipe.name}</h1>
      <p className="mb-4 text-sm text-hbk-slate">{recipe.notes}</p>
      <ul className="mb-4">
        {recipe.ingredients.map((ing: Ingredient) => (
          <li key={ing.id}>
            {getIngredientName(ing.id)} – {ing.grams}g
          </li>
        ))}
      </ul>
      <p className="text-xs text-hbk-slate">Flow guidance, nutrition data, and print coming soon.</p>
    </main>
  );
}
