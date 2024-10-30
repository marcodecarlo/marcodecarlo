import styles from "./H2.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const H2 = (props: any) => {
  return <h2 className={styles["title"]} {...props} />;
};

export default H2;
