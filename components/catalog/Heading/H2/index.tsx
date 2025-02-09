import { ComponentPropsWithoutRef } from "react";
import styles from "./H2.module.scss";

type HeadingProps = ComponentPropsWithoutRef<"h2">;

const H2 = (props: HeadingProps) => {
  return <h2 className={styles["title"]} {...props} />;
};

export default H2;
