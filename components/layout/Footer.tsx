import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from "@/lib";
import { Marcodecarlo, NavFooter } from "@/components";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-green-800/50 font-medium mt-12">
      <p className="text-green-100/20 text-sm">
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
      <div className="flex items-center justify-between py-10">
        <NavFooter />

        <Link href="mailto:marcodecarlo.developer@gmail.com" target="_blank">
          <Marcodecarlo />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
