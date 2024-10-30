import Link from "next/link";
import styles from "./Anchor.module.scss";

const Anchor = ({ href = "", ...props }) => {
  if (href.startsWith("http")) {
    return (
      <a
        className={styles["link"]}
        href={href}
        target="_blank"
        rel="noopener"
        {...props}
      />
    );
  }

  return <Link href={href} className={styles["link-next"]} {...props} />;
};

export default Anchor;
