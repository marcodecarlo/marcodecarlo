import { defineDocumentType } from "contentlayer/source-files";
import { createSlug, formatShortDate } from "../../lib";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    status: { type: "enum", options: ["draft", "published"], required: true },
  },
  computedFields: {
    headings: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          (match) => {
            const groups = (match as RegExpMatchArray).groups;
            const flag = groups?.flag
            const content = groups?.content;
         
            return {
              heading: flag?.length,
              text: content,
              slug: content ? createSlug(content) : undefined,
            }
          },
        );
        return headings
      },
    },
    publishedAtFormatted: {
      type: "string",
      resolve: (doc) => {
        return formatShortDate(doc.publishedAt)
      },
    },
    slug: {
      type: "string",
      resolve: (doc) =>
        doc._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}));

export default Post;
