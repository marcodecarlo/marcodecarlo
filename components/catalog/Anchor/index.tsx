import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import styles from "./Anchor.module.scss";

type AnchorProps = ComponentPropsWithoutRef<"a">;

const Anchor = ({ href, children, ...props }: AnchorProps) => {
  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={styles["link-next"]} {...props}>
        {children}
      </Link>
    );
  }
  if (href?.startsWith("#")) {
    return (
      <a href={href} className={styles["link"]} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles["link"]}
      {...props}
    >
      {children}
    </a>
  );
};

export default Anchor;
