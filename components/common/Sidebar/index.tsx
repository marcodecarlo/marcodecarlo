import { ReactNode } from "react";
import { ScrollToTop, Left } from "@/components";
import styles from "./Sidebar.module.scss";
interface SidebarProps {
  children: ReactNode;
}
const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        {children}
        <ScrollToTop>
          <Left /> {`Torna all'inizio`}
        </ScrollToTop>
      </div>
    </div>
  );
};

export default Sidebar;
