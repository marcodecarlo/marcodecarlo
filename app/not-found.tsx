import Link from "next/link";
import { Header } from "@/components";

export default function NotFound() {
  return (
    <div className="rounded-2xl bg-white/5 p-4 md:p-7">
      <Header sticky={false} />
      <p className="text-center text-2xl">Non ho trovato nulla!</p>

      <div className="text-center mt-6">
        <Link
          className="rounded-lg px-4 py-1 border border-green-800 hover:border-green-600 align-middle"
          href="/"
        >
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}
