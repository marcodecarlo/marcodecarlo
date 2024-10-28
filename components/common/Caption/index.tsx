import { ReactNode } from "react";
import styles from "./Caption.module.scss";

const Caption = ({ children }: { children: ReactNode }) => {
  return <div className={styles["wrapper"]}>{children}</div>;
};

export default Caption;
