import { notFound } from "next/navigation";
import { Post } from "@/components";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export async function generateStaticParams() {
  const posts = (await getAllProjects())
    .filter((p) => p.meta.status === "published")
    .map((p) => ({ slug: p.meta.slug }));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getProjectBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = `/progetti/${post.meta.slug}`;

  return {
    title: `${post.meta.title} ⋅ Marco De Carlo`,
    description: post?.meta.description,
    openGraph: {
      title: `${post.meta.title} ⋅ Marco De Carlo`,
      description: post?.meta.description,
      url: url,
      siteName: "Marco De Carlo",
      type: "website",
      images: [
        {
          url: "/marco_decarlo.png",
          width: 300,
          height: 200,
          alt: "Marco De Carlo - Web Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.meta.title} ⋅ Marco De Carlo`,
      description: post?.meta.description,
      creator: "@marco_dec",
      images: [
        {
          url: "/marco_decarlo.png",
          width: 300,
          height: 200,
          alt: "Marco De Carlo - Web Developer",
        },
      ],
    },
    alternates: { canonical: url },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getProjectBySlug(slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}
