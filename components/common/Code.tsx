"use client";

import { Children, isValidElement, ReactNode, useState } from "react";
import { Aside } from "@/components";

const Code = ({ children }: { children: ReactNode }) => {
  const [slide, setSlide] = useState(0);

  const titles: string[] = [];

  if (Children.count(children) === 0) {
    return null;
  }

  const slides = Children.map(children, (child, index) => {
    if (
      !isValidElement(child) ||
      typeof child.props?.["data-rehype-pretty-code-fragment"] === "undefined"
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
        <div className="mb-2 text-sm font-medium">Select a file</div>
        <div className="flex flex-wrap">
          {titles.map((title, index) => {
            return (
              <button
                key={index}
                className={`mr-2 mb-2 rounded-lg px-2 py-1 text-sm font-medium ${
                  index === slide
                    ? "bg-green-100/30 text-white"
                    : "bg-green-100/10 text-green-100/70 hover:bg-green-100/20 hover:text-green-100"
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
