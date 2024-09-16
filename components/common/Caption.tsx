import { ReactNode } from "react";

const Caption = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-2 border-l-2 border-rose-200/5 pl-3 text-sm">
      {children}
    </div>
  );
};

export default Caption;
