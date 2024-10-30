"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.scss";

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
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <p>
          Questo sito utilizza cookie analitici e di profilazione, propri e di
          terze parti, per finalità di analisi, per migliorare l&apos;esperienza
          dell&apos;utente. Se vuoi saperne di più{` `}
          <Link href="/cookiepolicy" className="link-primary">
            <span>clicca qui</span>
          </Link>
          . Cliccando su &ldquo;Acconsento&ldquo; o continuando ad utilizzare il
          sito, acconsenti all&apos;uso dei cookie.
        </p>
        <button onClick={handleConsent} className="btn-primary">
          Acconsento
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
