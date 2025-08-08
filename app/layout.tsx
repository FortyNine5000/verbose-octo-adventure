import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Home Blend Kitchen",
  description: "Caregiver‑first tools for blenderized tube feeding."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Header persists across pages and handles theme toggling */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}