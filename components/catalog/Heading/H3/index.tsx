import styles from "./H3.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const H3 = (props: any) => {
  return <h3 className={styles["title"]} {...props} />;
};

export default H3;
