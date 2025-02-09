import { ComponentPropsWithoutRef } from "react";
import styles from "./H1.module.scss";

type HeadingProps = ComponentPropsWithoutRef<"h1">;

const H1 = (props: HeadingProps) => {
  return <h1 className={styles["title"]} {...props} />;
};

export default H1;
