export default function NavBar() {
  return (
    <nav className="bg-hbk-slate text-white px-4 py-3 flex justify-between items-center">
      <a href="/" className="text-lg font-semibold">Home Blend Kitchen</a>
      <div className="space-x-4 text-sm">
        <a href="/recipes" className="hover:underline">Recipes</a>
        <a href="/builder" className="hover:underline">Blend Builder</a>
        <a href="/learn" className="hover:underline">Learn</a>
      </div>
    </nav>
  );
}
