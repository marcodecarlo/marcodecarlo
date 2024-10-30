"use client";
import type { ImageProps } from "next/image";
import NextImage from "next/image";
import { useState } from "react";
import styles from "./BlurImage.module.scss";

const BlurImage = (props: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={`${styles["wrapper"]} ${isLoading ? styles["loading"] : ""}`}
    >
      <NextImage
        {...props}
        className={`${styles["image"]} ${
          isLoading ? styles["loading"] : styles["no-loading"]
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
