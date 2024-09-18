import { ReactNode } from "react";

const Aside = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="z-10 border-l-2 border-green-200/5 pl-3">
      {title ? (
        <div className="mb-2 text-base italic text-opacity-100">{title}</div>
      ) : null}

      <div className="[&>span[data-rehype-pretty-code-fragment]]:!text-[11px] text-sm">
        {children}
      </div>
    </div>
  );
};

export default Aside;
