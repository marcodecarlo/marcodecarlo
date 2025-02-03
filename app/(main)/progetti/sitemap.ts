import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects();
  const publishedProjects = projects.filter(
    (p) => p.meta.status === "published"
  );

  return publishedProjects.map(({ meta }) => ({
    url: `https://marcodecarlo.com/progetti/${meta.slug}`,
    lastModified: new Date(meta.publishedAt),
  }));
}
