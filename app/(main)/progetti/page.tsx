import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { formatPostPreview } from "@/lib";
import { PostPreview } from "@/components";

export default async function Page() {
  const posts = await allPosts
    .filter((p) => p.status === "published")
    .map(formatPostPreview)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  if (!posts) {
    notFound();
  }

  return (
    <div className="mt-8 space-y-10">
      {posts.map((post) => {
        return <PostPreview key={post.slug} {...post} />;
      })}
    </div>
  );
}
