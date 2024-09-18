import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { myMeta } from "@/lib";
import { BackgroundFilter, Footer } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = myMeta;

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-exo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`overscroll-y-none font-sans bg-stone-900 selection:text-white selection:bg-green-950 ${exo.variable}`}
      >
        <BackgroundFilter />
        <div className="layout-sm relative z-10 grid gap-y-8 px-4 pt-12 text-green-100/90 xl:layout-xl xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
          {children}

          <Footer />
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="h-full bg-[url('https://res.cloudinary.com/graziadecarlo/image/upload/v1726317965/bg_gradient.png')] bg-top bg-no-repeat opacity-[0.8]"></div>
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-M6VWZPFW" />
      <GoogleAnalytics gaId="G-JHLV0QHNQN" />
    </html>
  );
}
