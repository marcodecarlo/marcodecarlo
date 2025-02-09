import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import {
  rehypeExtractHeadings,
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from "./rehypeOptions";
import type { Metadata } from "next";
import { format, isThisYear } from "date-fns";
import { it } from "date-fns/locale";
import { Heading, MDXComponents, Project } from "@/lib";

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

export const generateMeta = (project: Project): Metadata => {
  const { meta } = project;
  const url = `/progetti/${meta.slug}`;
  const images = meta.images?.length
    ? meta.images.map((img) => ({
        url: img.url,
        width: 1200,
        height: 630,
        alt: img.alt || "Marco De Carlo - Web Developer",
      }))
    : [
        {
          url: "/marco_decarlo.png",
          width: 1200,
          height: 630,
          alt: "Marco De Carlo - Web Developer",
        },
      ];
  //TODO provare con i valori width: 300, height: 200,

  return {
    title: `${meta.title} ⋅ Marco De Carlo`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} ⋅ Marco De Carlo`,
      description: meta.description,
      url: url,
      siteName: "Marco De Carlo",
      type: "website",
      images: images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} ⋅ Marco De Carlo`,
      description: meta.description,
      creator: "@marco_dec",
      images: images,
    },
    alternates: { canonical: url },
  };
};
