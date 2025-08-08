import HeroSection from "./components/HeroSection";
import FeatureCards from "./components/FeatureCards";
import EmailCapture from "./components/EmailCapture";

export const metadata = {
  title: "Home",
  description: "Natural, nourishing blends and tools for tube feeding." 
};

/**
 * HomePage renders the public landing page. The header and footer are defined
 * globally in the RootLayout; here we provide the core marketing sections
 * including the hero, feature highlights and email capture form.
 */
export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <FeatureCards />
      <EmailCapture />
    </div>
  );
}