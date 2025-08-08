export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-hbk-slate text-hbk-oat py-6 text-center text-sm">
      <nav className="mb-2 space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/learn" className="hover:underline">Learn</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
      </nav>
      <p>© {year} Home Blend Kitchen. Not medical advice.</p>
    </footer>
  );
}