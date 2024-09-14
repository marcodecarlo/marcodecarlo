import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Marco De Carlo",
  description: "Web Developer",
};

const exo = Exo_2({ subsets: ["latin"], weight: ["300", "600"], style: ["normal", "italic"], variable: "--font-exo" });

export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`min-h-screen font-sans bg-gray-900 selection:text-white selection:bg-green-950 ${exo.variable}`}>
      <div className="layout-sm relative z-10 grid gap-y-8 px-4 pt-12 text-green-200/90 xl:layout-xl xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
          {children}
        </div>
      </body>
    </html>
  );
}
