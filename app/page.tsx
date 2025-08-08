import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />
      <TrustBar />
    </div>
  );
}