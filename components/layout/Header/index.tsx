import { Nav, ProfileImage } from "@/components";
import styles from "./Header.module.scss";

interface HeaderProps {
  sticky: boolean;
}

export default function Header({ sticky }: HeaderProps) {
  return (
    <div className={`${styles["wrapper"]} ${sticky ? styles["sticky"] : ""}`}>
      <ProfileImage size={sticky ? "small" : "large"} />
      <div className={styles["content"]}>
        {!sticky && (
          <>
            <h1 className={styles["title"]}>Marco De Carlo</h1>
            <h2 className={styles["sub-title"]}>Web Developer</h2>
          </>
        )}
        <Nav sticky={sticky} />
      </div>
    </div>
  );
}
