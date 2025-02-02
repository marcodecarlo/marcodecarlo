"use client";

import { Children, isValidElement, ReactNode, useId, useState } from "react";
import { Aside } from "@/components";
import styles from "./Code.module.scss";

interface CodeBlockProps {
  "data-rehype-pretty-code-figure"?: string;
  children?: ReactNode;
}

const isCodeBlock = (
  child: unknown
): child is React.ReactElement<CodeBlockProps> => isValidElement(child);

const extractTitle = (child: React.ReactElement<CodeBlockProps>): string => {
  const title = (child.props.children as any)?.[0]?.props?.[
    "data-rehype-pretty-code-title"
  ];
  return title ? title.split("/").at(-1) || "Untitled" : "Untitled";
};

const Code = ({ children }: { children: ReactNode }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const id = useId();

  const parsedSlides = Children.toArray(children).reduce<{
    titles: string[];
    slides: ReactNode[];
  }>(
    (acc, child) => {
      if (!isCodeBlock(child)) return acc;
      acc.titles.push(extractTitle(child));
      acc.slides.push(child);
      return acc;
    },
    { titles: [], slides: [] }
  );

  if (parsedSlides.slides.length === 0) return null;

  return (
    <>
      <Aside>
        <div className={styles.select}>Seleziona file</div>
        <div className={styles.wrapper}>
          {parsedSlides.titles.map((title, index) => (
            <button
              key={`${id}-${index}`}
              className={`${styles.button} ${
                index === activeSlide ? styles.selected : styles.noSelected
              }`}
              onClick={() => setActiveSlide(index)}
            >
              {title}
            </button>
          ))}
        </div>
      </Aside>

      <div>
        {parsedSlides.slides.map((slide, index) => (
          <div
            key={index}
            className={index === activeSlide ? "block" : "hidden"}
          >
            {slide}
          </div>
        ))}
      </div>
    </>
  );
};

export default Code;
