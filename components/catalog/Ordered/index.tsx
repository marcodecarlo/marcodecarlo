import styles from "./Ordered.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Ordered = (props: any) => {
  return <ol className={styles["wrapper"]} {...props} />;
};

export default Ordered;
