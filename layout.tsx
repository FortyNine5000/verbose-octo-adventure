import "@/app/globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-hbk-oat text-hbk-ink font-sans">{children}</body>
    </html>
  );
}
