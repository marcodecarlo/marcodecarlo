import { ReactNode } from "react";
import { Header } from "@/components";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="sticky top-6 z-30 -mx-2">
        <Header sticky={true} />
      </div>

      {children}
    </>
  );
}
