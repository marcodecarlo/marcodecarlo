import styles from "./H1.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const H1 = (props: any) => {
  return <h1 className={styles["title"]} {...props} />;
};

export default H1;
