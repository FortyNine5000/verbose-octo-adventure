export default function LearnPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6 space-y-4">
      <h1 className="text-3xl font-bold text-hbk-slate dark:text-hbk-oat">Learn</h1>
      <p className="text-lg text-slate-700 dark:text-slate-300">
        Discover educational articles and tips about blenderized tube feeding. We aim to empower
        caregivers with knowledge and practical advice.
      </p>
      <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
        <li>What affects flow? <span className="italic">(coming soon)</span></li>
        <li>Bolus vs pump <span className="italic">(coming soon)</span></li>
        <li>Ingredient safety basics <span className="italic">(coming soon)</span></li>
      </ul>
    </div>
  );
}