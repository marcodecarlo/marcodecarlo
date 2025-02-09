import { ComponentPropsWithoutRef } from "react";
import styles from "./Horizontal.module.scss";

type HorizontalProps = ComponentPropsWithoutRef<"hr">;
const Horizontal = (props: HorizontalProps) => {
  return <hr className={styles["wrapper"]} {...props} />;
};

export default Horizontal;
