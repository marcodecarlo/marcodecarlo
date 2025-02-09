import { notFound } from "next/navigation";
import { Post } from "@/components";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { generateMeta } from "@/lib";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects
    .filter((p) => p.meta.status === "published")
    .map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return generateMeta(project);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <Post post={project} />;
}
