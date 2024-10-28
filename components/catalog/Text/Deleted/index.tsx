import styles from "./Deleted.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Deleted = (props: any) => {
  return <del className={styles["wrapper"]} {...props} />;
};

export default Deleted;
