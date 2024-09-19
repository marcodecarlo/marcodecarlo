"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const preferenceStorage = localStorage.getItem(
      "acceptBannerCookieTechnical"
    );

    setShowBanner(!!preferenceStorage);
  }, []);

  const handleConsent = () => {
    localStorage.setItem("acceptBannerCookieTechnical", "true");
    setShowBanner(true);
  };

  if (showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black p-4 shadow-lg shadow-green-800/50 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <p className="text-white text-sm">
          Questo sito utilizza cookie analitici e di profilazione, propri e di
          terze parti, per finalità di analisi, per migliorare l&apos;esperienza
          dell&apos;utente. Se vuoi saperne di più{` `}
          <Link href="/cookiepolicy" className="text-green-400 underline">
            clicca qui
          </Link>
          . Cliccando su &ldquo;Acconsento&ldquo; o continuando ad utilizzare il
          sito, acconsenti all&apos;uso dei cookie.
        </p>
        <button
          onClick={handleConsent}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition mt-3 sm:mt-0 mx-auto sm:ml-auto sm:mr-0"
        >
          Acconsento
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
