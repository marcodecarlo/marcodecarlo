import styles from "./Blockquote.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Blockquote = (props: any) => {
  return <blockquote className={styles["wrapper"]} {...props} />;
};

export default Blockquote;
