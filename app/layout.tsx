import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
