import { ComponentPropsWithoutRef } from "react";
import styles from "./Ordered.module.scss";

type OrderedProps = ComponentPropsWithoutRef<"ol">;
const Ordered = (props: OrderedProps) => {
  return <ol className={styles["wrapper"]} {...props} />;
};

export default Ordered;
