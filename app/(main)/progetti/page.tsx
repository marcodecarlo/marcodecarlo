import { notFound } from "next/navigation";
import { getAllProjects } from "@/lib/projects";
import { PostPreview } from "@/components";

export default async function Page() {
  const projects = await getAllProjects();

  const publishedProjects = projects
    .filter((p) => p.meta.status === "published")
    .sort(
      (a, b) =>
        Number(new Date(b.meta.publishedAt)) -
        Number(new Date(a.meta.publishedAt))
    );

  if (!publishedProjects) {
    notFound();
  }

  return (
    <div className="mt-8 space-y-10">
      {publishedProjects.map((post) => {
        return <PostPreview key={post.meta.slug} meta={post.meta} />;
      })}
    </div>
  );
}
