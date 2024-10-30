import { Fragment } from "react";
import {
  FolderIcon,
  ErrorIcon,
  LayoutIcon,
  LoadingIcon,
  TemplateIcon,
  PageIcon,
} from "@/components";
import styles from "./Filesystem.module.scss";

export type Item = {
  name: string;
  status?: "highlighted" | "faded";
  items?: Item[];
};

type Props = {
  items: Item[];
  size?: "small" | "medium";
  withCounters?: boolean;
};

const Filesystem = ({ items, size = "medium", withCounters }: Props) => {
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

const Node = ({ items, lvl, size, withCounters }: Props & { lvl: number }) => {
  return (
    <>
      {items.map(({ name, status, items }) => {
        return (
          <Fragment key={name}>
            <div
              className={`${styles["content-node"]} ${
                size === "medium"
                  ? styles["medium"]
                  : size === "small"
                  ? styles["small"]
                  : ""
              } ${status === "highlighted" ? styles["highlighted"] : ""} ${
                status === "highlighted" && withCounters === true
                  ? styles["counter"]
                  : ""
              }`}
            >
              <div
                className={`${
                  !status
                    ? "text-green-100/30"
                    : status === "highlighted"
                    ? "text-yellow-100/30"
                    : status === "faded"
                    ? "text-green-100/10"
                    : ""
                } ${
                  lvl === 1
                    ? "pl-[12px]"
                    : lvl === 2
                    ? "pl-[24px]"
                    : lvl === 3
                    ? "pl-[36px]"
                    : lvl === 4
                    ? "pl-[48px]"
                    : ""
                }`}
              >
                <Icon
                  name={name}
                  className="h-4 w-4"
                  isFolder={Boolean(items)}
                />
              </div>
              <div
                className={`truncate ${size === "small" ? "text-sm" : ""} ${
                  !status
                    ? "text-green-100/70"
                    : status === "highlighted"
                    ? "text-yellow-100/70"
                    : status === "faded"
                    ? "text-green-100/30"
                    : ""
                }`}
              >
                {name}
              </div>
            </div>

            {items ? (
              <Node
                items={items}
                lvl={lvl + 1}
                size={size}
                withCounters={withCounters}
              />
            ) : null}
          </Fragment>
        );
      })}
    </>
  );
};

const Icon = ({
  name,
  className,
  isFolder,
}: {
  name: string;
  className: string;
  isFolder?: boolean;
}) => {
  if (isFolder) {
    return <FolderIcon className={className} />;
  }

  switch (name) {
    case "layout.tsx":
      return <LayoutIcon className={className} />;
    case "loading.tsx":
      return <LoadingIcon className={className} />;
    case "error.tsx":
      return <ErrorIcon className={className} />;
    case "head.tsx":
    case "template.tsx":
      return <TemplateIcon className={className} />;
    case "page.tsx":
    default:
      return <PageIcon className={className} />;
  }
};

export default Filesystem;
