export const HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] before:text-green-100/0 hover:before:text-green-200/50 pl-[1em] -ml-[1em]`

export const LINK_STYLES = `text-green-200 underline decoration-green-200/20 underline-offset-2 transition-all hover:text-green-100 hover:decoration-green-100/40`

export const LINK_SUBTLE_STYLES = `hover:underline hover:decoration-green-300/30 hover:underline-offset-2 hover:text-green-200/90`;

export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/70`;

export const  myMeta = {
    metadataBase: new URL("https://marcodecarlo.com"),
    title: "Marco De Carlo",
    applicationName: "Marco De Carlo",
    description:
      "Marco De Carlo, Web Developer esperto in siti web personalizzati per aziende e professionisti.",
    keywords: [
      "Web Developer",
      "Consulenza",
      "Siti Web",
      "Informatico",
      "Progetti",
      "Alberobello",
    ],
    authors: [{ name: "Marco De Carlo" }],
    creator: "Marco De Carlo",
    verification: {
      google: "gbC2-OOov4OvUmElXppQkpfcTmd20a85i7DaEY1qmKk",
    },
    formatDetection: {
      email: false,
      address: true,
      telephone: false,
    },
    openGraph: {
      title: "Marco De Carlo - Web Developer",
      description:
        "Marco De Carlo, Web Developer esperto in siti web personalizzati per aziende e professionisti.",
      url: "https://marcodecarlo.com",
      siteName: "Marco De Carlo",
      images: [
        {
          url: "/marco_decarlo.png",
          width: 300,
          height: 200,
          alt: "Marco De Carlo - Web Developer",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Marco De Carlo - Web Developer",
      description:
        "Marco De Carlo, Web Developer esperto in siti web personalizzati per aziende e professionisti.",
      creator: "@marco_dec",
      images: ["/marco_decarlo.png"],
      url: "https://marcodecarlo.com",
    },
    alternates: { canonical: "https://marcodecarlo.com" },
  };

