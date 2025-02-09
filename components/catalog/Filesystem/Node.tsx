import { Fragment } from "react";
import { FilesystemProps } from "./Filesystem";
import Icon from "./Icon";
import styles from "./Filesystem.module.scss";

type NodeProps = FilesystemProps & { lvl: number };

const getStatusColor = (status?: string) => {
  switch (status) {
    case "highlighted":
      return "text-yellow-100/30";
    case "faded":
      return "text-green-100/10";
    default:
      return "text-green-100/30";
  }
};

const getStatusTextColor = (status?: string) => {
  switch (status) {
    case "highlighted":
      return "text-yellow-100/70";
    case "faded":
      return "text-green-100/30";
    default:
      return "text-green-100/70";
  }
};
const Node = ({ items, lvl, size = "medium", withCounters }: NodeProps) => {
  return (
    <>
      {items.map(({ name, status, items }, index) => (
        <Fragment key={`${name}_${index}`}>
          <div
            className={`${styles["content-node"]} ${styles[size]} ${
              status === "highlighted" ? styles["highlighted"] : ""
            } ${
              status === "highlighted" && withCounters ? styles["counter"] : ""
            }`}
          >
            <div
              className={`${getStatusColor(status)}`}
              style={{ paddingLeft: lvl * 12 }}
            >
              <Icon name={name} className="h-4 w-4" isFolder={!!items} />
            </div>
            <div
              className={`truncate ${
                size === "small" ? "text-sm" : ""
              } ${getStatusTextColor(status)}`}
            >
              {name}
            </div>
          </div>
          {items && (
            <Node
              items={items}
              lvl={lvl + 1}
              size={size}
              withCounters={withCounters}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};

export default Node;
