"use client";
import { CSSProperties } from "react";
import styles from "./PrideFlag.module.scss";

const PrideFlag = () => {
  const colors = [
    "hsl(0deg 0% 18%)",
    "hsl(30deg 60% 30%)",
    "hsl(0deg 90% 55%)",
    "hsl(30deg 95% 65%)",
    "hsl(55deg 90% 65%)",
    "hsl(100deg 65% 45%)",
    "hsl(220deg 80% 55%)",
    "hsl(265deg 80% 50%)",
  ];

  return (
    <div className={styles.flag} title="Pride Month">
      {Array.from({ length: 10 }).map((item, index) => (
        <div
          key={index}
          className={styles.column}
          style={
            {
              "--billow": index + "px",
              background: generateGradientString(colors),
              animationDelay: `${index * 36}ms`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};

function generateGradientString(colors: string[]) {
  const numOfColors = colors.length;
  const segmentHeight = 100 / numOfColors;

  const gradientStops = colors.map((color, index) => {
    const from = index * segmentHeight;
    const to = (index + 1) * segmentHeight;

    return `${color} ${from}% ${to}%`;
  });

  return `linear-gradient(to bottom, ${gradientStops.join(", ")})`;
}

export default PrideFlag;
