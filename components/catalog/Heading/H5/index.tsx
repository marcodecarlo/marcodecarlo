import { ComponentPropsWithoutRef } from "react";
import styles from "./H5.module.scss";

type HeadingProps = ComponentPropsWithoutRef<"h5">;

const H5 = (props: HeadingProps) => {
  return <h5 className={styles["title"]} {...props} />;
};

export default H5;
