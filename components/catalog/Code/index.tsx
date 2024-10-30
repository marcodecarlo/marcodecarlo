"use client";
import { Children, isValidElement, ReactNode, useId, useState } from "react";
import { Aside } from "@/components";
import styles from "./Code.module.scss";

const Code = ({ children }: { children: ReactNode }) => {
  const [slide, setSlide] = useState(0);
  const id = useId();

  const titles: string[] = [];

  if (Children.count(children) === 0) {
    return null;
  }

  const slides = Children.map(children, (child, index) => {
    if (
      !isValidElement(child) ||
      typeof child.props?.["data-rehype-pretty-code-figure"] === "undefined"
    ) {
      return null;
    }

    if (
      typeof child.props.children?.[0]?.props?.[
        "data-rehype-pretty-code-title"
      ] !== "undefined"
    ) {
      const title = child.props.children[0].props.children.split("/");
      titles.push(title[title.length - 1]);
    }

    return (
      <div key={index} className={`${index === slide ? "block" : "hidden"}`}>
        {child}
      </div>
    );
  });

  return (
    <>
      <Aside>
        <div className={styles["select"]}>Seleziona file</div>
        <div className={styles["wrapper"]}>
          {titles.map((title, index) => {
            return (
              <button
                key={`${id}-${index}`}
                className={`${styles["button"]} ${
                  index === slide ? styles["selected"] : styles["no-selected"]
                }`}
                onClick={() => setSlide(index)}
              >
                {title}
              </button>
            );
          })}
        </div>
      </Aside>

      <div>{slides}</div>
    </>
  );
};

export default Code;
