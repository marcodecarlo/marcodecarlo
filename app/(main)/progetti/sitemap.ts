import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getAllProjects()).filter(
    (p) => p.meta.status === "published"
  );

  return posts.map((p) => ({
    url: `https://marcodecarlo.com/progetti/${p.meta.slug}`,
    lastModified: new Date(p.meta.publishedAt),
  }));
}
