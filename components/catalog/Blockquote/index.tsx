import { ComponentPropsWithoutRef } from "react";
import styles from "./Blockquote.module.scss";

type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const Blockquote = (props: BlockquoteProps) => {
  return <blockquote className={styles["wrapper"]} {...props} />;
};

export default Blockquote;
