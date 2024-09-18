"use client";
import type { ImageProps } from "next/image";
import NextImage from "next/image";
import { useState } from "react";

const BlurImage = (props: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={`${
        isLoading ? "animate-pulse" : ""
      } relative flex overflow-hidden rounded-xl bg-white/[2%] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-xl after:border after:border-green-200/10 after:content-['']`}
    >
      <NextImage
        {...props}
        className={`rounded-xl duration-700 ease-in-out ${
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
