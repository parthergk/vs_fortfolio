import type { Metadata } from "next";
import "./globals.css";
import { PortfolioProvider } from "@/context/PortfolioProvider";

export const metadata: Metadata = {
  title: "Gaurav Kumar | Developer Portfolio",
  description: "Showcasing my journey as a frontend developer, projects, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{
          fontFamily: "Consolas, 'Courier New', monospace",
        }}
      >
        <PortfolioProvider>
        {children}
        </PortfolioProvider>
      </body>
    </html>
  );
}
