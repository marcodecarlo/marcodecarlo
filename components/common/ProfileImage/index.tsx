import Image from "next/image";
import Link from "next/link";
import styles from "./ProfileImage.module.scss";

interface ProfileImageProps {
  size: "small" | "large";
}

export default function ProfileImage({ size = "large" }: ProfileImageProps) {
  return (
    <Link
      href="/"
      title="Navigate home"
      className={`${styles["wrapper"]} ${
        size == "large" ? styles["large"] : styles["small"]
      }`}
    >
      <div
        className={`${styles["content"]} ${
          size == "large" ? styles["large"] : styles["small"]
        }`}
      >
        <Image
          src="/marco_decarlo.webp"
          quality={100}
          width={144}
          height={144}
          priority={true}
          className={styles["image"]}
          alt="Foto di Marco De Carlo"
        />
      </div>
    </Link>
  );
}
