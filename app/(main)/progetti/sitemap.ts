import { allPosts } from '@/.contentlayer/generated';
import type { MetadataRoute } from 'next';

   
  export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await allPosts
    .filter((p) => p.status === "published")

    return posts.map((p) => ({
      url: `https://marcodecarlo.com/progetti/${p.slug}`,
      lastModified: new Date(p.publishedAt),
    }))
  }