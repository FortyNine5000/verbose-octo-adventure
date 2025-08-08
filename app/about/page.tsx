import AboutUs from "../components/AboutUs";

export const metadata = {
  title: "About",
  description: "Learn about the mission and team behind Home Blend Kitchen."
};

/**
 * About page simply renders the AboutUs component. The header and footer are
 * provided by the root layout.
 */
export default function AboutPage() {
  return <AboutUs />;
}