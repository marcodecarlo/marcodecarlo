import { ReactNode } from "react";

interface ImageMeta {
  url: string;
  alt?: string;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  status: "published" | "draft";
  images?: ImageMeta[];
}

export interface Project {
  meta: ProjectMeta;
  content: ReactNode;
  headings: Heading[];
}

export interface Heading {
  heading: number;
  text: string;
  slug: string;
}
