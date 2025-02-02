import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import {
  rehypeExtractHeadings,
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from "./rehypeOptions";
import { format, isThisYear } from "date-fns";
import { it } from "date-fns/locale";
import { Heading, MDXComponents } from "@/lib";

export const formatShortDate = (date: string) => {
  const _date = new Date(date);

  return isThisYear(_date)
    ? format(_date, "MMM d", { locale: it })
    : format(_date, "MMM d, y", { locale: it });
};

export const createSlug = (slug: string): string => {
  slug = slug.toLowerCase();

  slug = slug.replace(/[^a-z0-9\s]/g, "");
  slug = slug.replace(/\s+/g, "-");

  return slug;
};

export const parseMDX = async <T>(source: string, headings: Heading[] = []) => {
  return compileMDX<T>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypeSlug],
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypePrettyCode, rehypePrettyCodeOptions],
          [rehypePrettyCodeClasses],
          [rehypeExtractHeadings, headings],
        ],
      },
    },
    components: MDXComponents,
  });
};
