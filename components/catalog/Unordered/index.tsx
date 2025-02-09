import { ComponentPropsWithoutRef } from "react";
import styles from "./Unordered.module.scss";

type ListProps = ComponentPropsWithoutRef<"ul">;
const Unordered = (props: ListProps) => {
  return <ul className={styles["wrapper"]} {...props} />;
};

export default Unordered;
