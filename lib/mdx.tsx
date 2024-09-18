/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ImageProps } from "next/image";

import { LINK_STYLES } from "./constants";
import {
  Aside,
  BlurImage,
  Code,
  Filesystem,
  Grid,
  Caption,
} from "@/components";
import { ReactNode } from "react";
import Link from "next/link";

export const components = {
  Code,
  Filesystem,
  Grid,
  Aside,
  h1: (props: any) => (
    <h2
      className="relative mt-3 border-t-2 border-green-200/5 pt-9 text-xl font-medium text-green-200/95 sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative mt-3 border-t-2 border-green-200/5 pt-9 text-xl font-medium text-green-200/95 sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h4 className="text-xl font-medium text-green-200/95" {...props} />
  ),
  h4: (props: any) => (
    <h5 className="text-lg font-medium text-green-200/95" {...props} />
  ),
  hr: (props: any) => (
    <hr className="border-t-2 border-green-200/5" {...props} />
  ),
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <a
          className={LINK_STYLES}
          href={href}
          target="_blank"
          rel="noopener"
          {...props}
        />
      );
    }

    return <Link href={href} className={LINK_STYLES} {...props} />;
  },
  ul: (props: any) => (
    <ul
      className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-2 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-green-200/20"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol className="list-decimal space-y-3 pl-10" {...props} />
  ),
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  Img: ({
    children,
    bleed,
    caption,
    ...props
  }: {
    children: ReactNode;
    bleed?: boolean;
    caption?: string;
  } & ImageProps) => {
    return (
      <>
        <div className={`${bleed ? "xl:!col-start-2 xl:!col-end-4" : ""}`}>
          <BlurImage {...props} />
        </div>
        {caption ? <Caption>{caption}</Caption> : null}
      </>
    );
  },
  blockquote: (props: any) => (
    <blockquote
      className="relative border-l-2 border-green-200/5 pl-4 pt-8 before:absolute before:top-5 before:-ml-1 before:-mt-6 before:text-6xl before:text-green-200/20 before:content-['“'] [&_em]:mt-3 [&_em]:block [&_em]:not-italic [&_em]:leading-none [&_em]:before:pr-1 [&_em]:before:content-['—']"
      {...props}
    />
  ),
  del: (props: any) => (
    <del className="text-green-200/50 line-through" {...props} />
  ),
};
