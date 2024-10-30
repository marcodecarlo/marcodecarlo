import type { Metadata } from "next";
import { Exo_2, Redacted_Script } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { myMeta } from "@/lib";
import {
  BackgroundFilter,
  BackgroundImage,
  CookieBanner,
  Footer,
  PrideFlag,
} from "@/components";
import "@/styles/globals.scss";

export const metadata: Metadata = myMeta;

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-exo",
});

const redacted = Redacted_Script({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-redacted",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`overscroll-y-none font-sans bg-stone-900 selection:text-white selection:bg-green-950 relative ${exo.variable} ${redacted.variable}`}
      >
        <BackgroundFilter />
        <div className="layout-sm relative z-10 grid gap-y-8 px-4 pt-12 text-green-100/90 xl:layout-xl xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
          {children}

          <Footer />
        </div>
        <BackgroundImage />
        <PrideFlag />
        <CookieBanner />
      </body>
      <GoogleTagManager gtmId="GTM-M6VWZPFW" />
      <GoogleAnalytics gaId="G-JHLV0QHNQN" />
    </html>
  );
}
