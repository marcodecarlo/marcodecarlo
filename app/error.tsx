"use client";

import { Header, Marcodecarlo } from "@/components";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="rounded-2xl bg-white/5 p-4 md:p-7">
      <Header sticky={false} />
      <p className="text-center text-2xl">Qualcosa è andato storto!</p>

      <div className="text-center mt-6">
        <button
          className="rounded-lg px-4 py-1 border border-green-800 hover:border-green-600 align-middle"
          onClick={() => reset()}
        >
          Riprova
        </button>
      </div>
    </div>
  );
}
