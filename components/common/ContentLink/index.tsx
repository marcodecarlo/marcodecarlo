import Link from "next/link";
import { ElementType, ReactNode } from "react";
import styles from "./ContentLink.module.scss";

export function ContentLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${styles["wrapper"]} ${className}`}>
      {children}
    </Link>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <h3 className={styles["title"]}>{children}</h3>;
}

function Icon(props: { icon: ElementType }) {
  return (
    <div className={styles["content-icon"]}>
      <props.icon className={styles["icon"]} />
    </div>
  );
}

function Text({ children }: { children: ReactNode }) {
  return <p className={styles["body"]}>{children}</p>;
}

function Meta({ children }: { children: ReactNode }) {
  return <div className={styles["meta"]}>{children}</div>;
}

ContentLink.Title = Title;
ContentLink.Icon = Icon;
ContentLink.Text = Text;
ContentLink.Meta = Meta;
