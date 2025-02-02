import { ReactNode } from "react";

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  status: "published" | "draft";
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
