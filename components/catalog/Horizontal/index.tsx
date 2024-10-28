import styles from "./Horizontal.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Horizontal = (props: any) => {
  return <hr className={styles["wrapper"]} {...props} />;
};

export default Horizontal;
