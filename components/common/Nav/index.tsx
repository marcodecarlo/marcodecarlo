import { Email, GithubIcon, Light, Linkedin } from "@/components";
import { ElementType, ReactNode } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

interface NavItemProps {
  children?: ReactNode;
  label: string;
  href: string;
  targetBlank?: boolean;
  className?: string;
  Icon: ElementType;
}

function NavItem({
  children,
  label,
  href,
  targetBlank = false,
  className,
  Icon,
}: NavItemProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`${styles["nav-item"]} ${className ?? ""}`}
      target={targetBlank ? "_blank" : ""}
    >
      <div className={styles["container"]}>
        <div className={styles["container-header"]}>
          <div className={styles["content-icon"]}>
            <Icon className={styles["icon"]} />
          </div>
        </div>
        <div className={styles["container-body"]}>{children}</div>
      </div>
    </Link>
  );
}

interface NavProps {
  sticky: boolean;
}

const Nav = ({ sticky }: NavProps) => {
  return (
    <div
      className={`${styles["wrapper-nav"]} ${sticky ? styles["sticky"] : ""}`}
    >
      <NavItem href="/progetti" Icon={Light} label="Progetti">
        Progetti
      </NavItem>
      <NavItem
        href="mailto:marcodecarlo.developer@gmail.com"
        Icon={Email}
        label="Contattami"
      >
        Contattami
      </NavItem>
      <NavItem
        href="https://www.linkedin.com/in/marco-de-carlo/"
        targetBlank
        Icon={Linkedin}
        label="Linkedin"
      >
        Linkedin
      </NavItem>
    </div>
  );
};

const NavFooter = () => {
  return (
    <div className={styles["wrapper-nav-footer"]}>
      <NavItem
        href="https://www.linkedin.com/in/marco-de-carlo/"
        targetBlank
        Icon={Linkedin}
        label="Linkedin"
      />

      <NavItem
        href="https://github.com/marcodecarlo"
        targetBlank
        Icon={GithubIcon}
        label="GitHub"
      />

      <NavItem
        href="mailto:marcodecarlo.developer@gmail.com"
        Icon={Email}
        label="Email"
      />
    </div>
  );
};

export { Nav, NavFooter };
