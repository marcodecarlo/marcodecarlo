import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { formatPost } from "@/lib";
import { Post } from "@/components";

export default async function Page() {
  const post = await allPosts.filter((p) => p.status === "published");
  console.log("Ciao ", post);
  if (!post) {
    notFound();
  }
  const formattedPost = formatPost(post[0]);
  return <Post post={formattedPost} />;
}
