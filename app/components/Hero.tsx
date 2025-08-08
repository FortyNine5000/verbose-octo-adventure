export default function Hero() {
  return (
    <section className="bg-hbk-oat text-hbk-slate py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Build better blends. <span className="text-hbk-teal">Share with confidence.</span>
      </h1>
      <p className="text-lg mb-6">
        Recipe ideas, an interactive builder, and print‑ready cards for shift hand‑offs.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/builder"
          className="bg-hbk-teal text-white px-5 py-2 rounded-soft shadow-card hover:bg-teal-800 transition"
        >
          Build a Blend
        </a>
        <a
          href="/recipes"
          className="bg-hbk-coral text-white px-5 py-2 rounded-soft shadow-card hover:bg-hbk-coral/80 transition"
        >
          Browse Recipes
        </a>
      </div>
    </section>
  );
}