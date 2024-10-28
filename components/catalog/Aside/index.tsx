import { ReactNode } from "react";
import styles from "./Aside.module.scss";

const Aside = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className={styles["wrapper"]}>
      {title ? <div className={styles["title"]}>{title}</div> : null}

      <div className={styles["body"]}>{children}</div>
    </div>
  );
};

export default Aside;
