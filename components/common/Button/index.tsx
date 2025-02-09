import Link from "next/link";
import styles from "./Button.module.scss";
import { ReactElement } from "react";
interface ButtonProps {
  href: string;
  label: string;
  icon?: ReactElement;
}
const Button = ({ href, label, icon }: ButtonProps) => {
  return (
    <Link href={href} className={styles["btn"]}>
      {icon && (
        <div className={styles["container-icon"]}>
          <div className={styles["icon"]}>{icon}</div>
        </div>
      )}
      <div className={styles["label"]}>{label}</div>
    </Link>
  );
};

export default Button;
