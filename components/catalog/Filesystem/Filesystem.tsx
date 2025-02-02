import { NameIcon } from "./Icon";
import Node from "./Node";
import styles from "./Filesystem.module.scss";

interface Item {
  name: `${NameIcon}` | string;
  status?: "highlighted" | "faded";
  items?: Item[];
}

export interface FilesystemProps {
  items: Item[];
  size?: "small" | "medium";
  withCounters?: boolean;
}

const Filesystem = ({
  items,
  size = "medium",
  withCounters,
}: FilesystemProps) => {
  return (
    <div
      className={`${styles["wrapper"]} ${
        withCounters ? styles["counter"] : ""
      }`}
    >
      <Node items={items} lvl={0} size={size} withCounters={withCounters} />
    </div>
  );
};

export default Filesystem;
