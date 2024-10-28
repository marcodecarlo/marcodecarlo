import styles from "./Unordered.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Unordered = (props: any) => {
  return <ul className={styles["wrapper"]} {...props} />;
};

export default Unordered;
