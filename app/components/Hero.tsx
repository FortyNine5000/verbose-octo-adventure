export default function Hero() {
  return (
    <section className="bg-hbk-oat text-hbk-ink py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Nourish Naturally with Home Blend Kitchen</h1>
      <p className="text-lg mb-6">Caregiver-first tools for safe, smooth blenderized tube feeding.</p>
      <div className="space-x-4">
        <a href="/builder" className="bg-hbk-teal text-white px-4 py-2 rounded-soft shadow-card hover:bg-teal-700 transition">Build a Blend</a>
        <a href="/recipes" className="bg-hbk-coral text-white px-4 py-2 rounded-soft shadow-card hover:bg-orange-600 transition">Browse Recipes</a>
      </div>
    </section>
  );
}
