import styles from "./H5.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const H5 = (props: any) => {
  return <h5 className={styles["title"]} {...props} />;
};

export default H5;
