import { ComponentPropsWithoutRef } from "react";
import styles from "./H3.module.scss";

type HeadingProps = ComponentPropsWithoutRef<"h3">;
const H3 = (props: HeadingProps) => {
  return <h3 className={styles["title"]} {...props} />;
};

export default H3;
