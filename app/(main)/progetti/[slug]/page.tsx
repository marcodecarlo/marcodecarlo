import { allPosts } from "@/.contentlayer/generated";
import { Post } from "@/components";
import { formatPost } from "@/lib";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = allPosts
    .filter((p) => p.status === "published")
    .map((p) => ({ slug: p.slug }));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    notFound();
  }

  const url = `/progetti/${post.slug}`;

  return {
    title: `${post.title} ⋅ Marco De Carlo`,
    alternates: { canonical: url },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    notFound();
  }
  const formattedPost = formatPost(post);

  return <Post post={formattedPost} />;
}
