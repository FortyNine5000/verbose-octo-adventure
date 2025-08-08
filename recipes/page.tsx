"use client";
import { useState } from "react";
import recipes from "../data/recipes.json";
import ingredients from "../data/ingredients.json";

export default function RecipesPage() {
  const [activeRecipe, setActiveRecipe] = useState(null);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, idx) => (
          <li key={idx} onClick={() => setActiveRecipe(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
      {activeRecipe && (
        <div>
          <h2>{activeRecipe.name}</h2>
          <p>{activeRecipe.instructions}</p>
        </div>
      )}
    </div>
  );
}
