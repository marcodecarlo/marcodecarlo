import { ComponentPropsWithoutRef } from "react";
import styles from "./H4.module.scss";

type HeadingProps = ComponentPropsWithoutRef<"h4">;

const H4 = (props: HeadingProps) => {
  return <h4 className={styles["title"]} {...props} />;
};

export default H4;
