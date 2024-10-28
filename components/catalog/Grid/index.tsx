import styles from "./Grid.module.scss";

const Grid = ({
  children,
  x,
}: {
  children: React.ReactNode;
  x: "full" | "aside";
}) => {
  return (
    <div
      className={`${x === "full" ? styles["wrapper-full"] : ""} ${
        x === "aside" ? styles["wrapper-aside"] : ""
      }`}
    >
      {x === "aside" ? (
        <div className={styles["container"]}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default Grid;
