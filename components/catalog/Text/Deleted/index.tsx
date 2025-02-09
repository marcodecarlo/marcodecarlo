import { ComponentPropsWithoutRef } from "react";
import styles from "./Deleted.module.scss";

type DeletedProps = ComponentPropsWithoutRef<"del">;

const Deleted = (props: DeletedProps) => {
  return <del className={styles["wrapper"]} {...props} />;
};

export default Deleted;
