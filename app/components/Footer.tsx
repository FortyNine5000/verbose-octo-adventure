export default function Footer() {
  return (
    <footer className="bg-hbk-slate text-white py-6 px-4 text-center text-sm mt-10">
      <nav className="mb-2 space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/learn" className="hover:underline">Learn</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
      </nav>
      <p>&copy; {new Date().getFullYear()} Home Blend Kitchen. Not medical advice.</p>
    </footer>
  );
}
