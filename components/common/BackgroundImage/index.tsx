import styles from "./BackgroundImage.module.scss";

const BackgroundImage = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["image"]}></div>
    </div>
  );
};

export default BackgroundImage;
