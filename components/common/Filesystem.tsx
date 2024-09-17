import { Fragment } from "react";
import {
  FolderIcon,
  ErrorIcon,
  LayoutIcon,
  LoadingIcon,
  TemplateIcon,
  PageIcon,
} from "@/components";

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
      className={`valkyrie backdrop-blur-mdx divide-y divide-green-100/5 rounded-lg font-medium shadow-xl shadow-black/5 ${
        withCounters ? "[counter-reset:highlight]" : ""
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
              className={`flex items-center space-x-2 leading-none ${
                size === "medium"
                  ? "py-3 px-4"
                  : size === "small"
                  ? "py-2 px-3"
                  : ""
              } ${
                status === "highlighted"
                  ? "rounded-lg border-none bg-yellow-700/[15%] ring-2 ring-yellow-700/80"
                  : ""
              } ${
                status === "highlighted" && withCounters === true
                  ? "relative before:absolute before:-top-0.5 before:-left-6 before:flex before:h-4 before:w-4 before:items-center before:justify-center before:rounded-full before:bg-yellow-700 before:text-xs before:font-semibold before:text-yellow-100/90 before:![content:counter(highlight)] before:[counter-increment:highlight]"
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
