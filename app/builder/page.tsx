import ingredients from "@/app/data/ingredients.json";

export default function BuilderPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blend Builder</h1>
      <p className="mb-6 text-hbk-slate">Select ingredients and enter weights to calculate nutrition and flow risk.</p>
      <p className="text-sm text-hbk-slate">🚧 Interactive builder coming soon — placeholder for layout.</p>
      <ul className="list-disc ml-5 text-sm">
        {ingredients.slice(0, 5).map((i) => (
          <li key={i.id}>{i.name} — {i.kcal_per_100g} kcal/100g</li>
        ))}
      </ul>
    </main>
  );
}
