import { allPosts } from "@/.contentlayer/generated";
import { Post } from "@/components";

import { formatPost } from "@/lib";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = allPosts
    .filter((p) => p.status === "published")
    .map((p) => ({ slug: p.slug }));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    notFound();
  }
  const formattedPost = formatPost(post);

  return <Post post={formattedPost} />;
}
