import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default async function Page() {
  const post = allPosts.filter((p) => p.status === "published");

  if (!post) {
    notFound();
  }

  return <div>{JSON.stringify(post)}</div>;
}
