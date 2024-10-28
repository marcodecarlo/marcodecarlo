import styles from "./H4.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const H4 = (props: any) => {
  return <h4 className={styles["title"]} {...props} />;
};

export default H4;
