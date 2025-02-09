import { promises as fs } from "fs";
import path from "path";
import { parseMDX, Heading, Project, ProjectMeta } from "@/lib";

const rootDirectory = path.join(process.cwd(), "content", "projects");

export const getAllProjects = async (): Promise<
  Omit<Project, "content" | "headings">[]
> => {
  const filenames = await fs.readdir(rootDirectory);

  const projectsPreviews = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const projects = await getProjectBySlug(slug);

      return { meta: projects.meta };
    })
  );
  return projectsPreviews;
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);

  const fileContent = await fs.readFile(filePath, { encoding: "utf-8" });
  const headings: Heading[] = [];
  const { frontmatter, content } = await parseMDX<ProjectMeta>(
    fileContent,
    headings
  );

  if (
    !frontmatter.title ||
    !frontmatter.description ||
    !frontmatter.publishedAt ||
    !frontmatter.status
  ) {
    throw new Error(`Il file ${slug}.mdx ha un frontmatter non valido.`);
  }

  return { meta: { ...frontmatter, slug }, content, headings };
};
