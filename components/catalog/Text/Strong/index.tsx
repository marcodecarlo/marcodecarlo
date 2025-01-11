import { ComponentPropsWithoutRef } from "react";
import styles from "./Strong.module.scss";

type ParagraphStrongProps = ComponentPropsWithoutRef<"strong">;

const Strong = (props: ParagraphStrongProps) => {
  return <strong className={styles["wrapper"]} {...props} />;
};
export default Strong;
