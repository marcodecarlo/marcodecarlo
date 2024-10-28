"use client";
import styles from "./ScrollToTop.module.scss";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className={styles["button"]}
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      {children}
    </button>
  );
};

export default ScrollToTop;
