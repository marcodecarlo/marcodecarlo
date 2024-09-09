import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco De Carlo",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
