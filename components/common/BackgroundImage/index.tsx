import Image from "next/image";
import styles from "./BackgroundImage.module.scss";

const BackgroundImage = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="https://res.cloudinary.com/graziadecarlo/image/upload/v1730288072/bg_gradient_wp.webp"
        alt="Background"
        fill
        priority
        className={styles.image}
      />
    </div>
  );
};

export default BackgroundImage;
