import styles from "./Strong.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Strong = (props: any) => {
  return <strong className={styles["wrapper"]} {...props} />;
};
export default Strong;
