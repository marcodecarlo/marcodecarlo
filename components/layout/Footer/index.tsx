import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from "@/lib";
import { Marcodecarlo, NavFooter } from "@/components";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["wrapper"]}>
      <p>
        Sviluppato con{" "}
        <a
          href="https://nextjs.org"
          className={`${LINK_SUBTLE_STYLES} ${FOCUS_VISIBLE_OUTLINE}`}
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://mdxjs.com"
          className={`${LINK_SUBTLE_STYLES} ${FOCUS_VISIBLE_OUTLINE}`}
        >
          MDX
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com"
          className={`${LINK_SUBTLE_STYLES} ${FOCUS_VISIBLE_OUTLINE}`}
        >
          Tailwind
        </a>{" "}
        e{" "}
        <a
          href="https://vercel.com"
          className={`${LINK_SUBTLE_STYLES} ${FOCUS_VISIBLE_OUTLINE}`}
        >
          Vercel
        </a>
      </p>
      <div className={styles["content"]}>
        <NavFooter />

        <Link href="mailto:marcodecarlo.developer@gmail.com" target="_blank">
          <Marcodecarlo enablePowered={true} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
