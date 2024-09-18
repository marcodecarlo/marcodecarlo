import { Post } from "contentlayer/generated";
import { pick } from "contentlayer/client";

export const formatPostPreview = (post: Post) => {
    const partialPost = pick(post, [
      "slug",
      "title",
      "description",
      "publishedAt",
      "publishedAtFormatted",
    ])
  
    return {
      ...partialPost,
      type: post.type,
      description: partialPost.description ?? null,
    }
  }

  export const formatPost = (
    {
      title,
      slug,
      publishedAtFormatted,
      description,
      body,
      headings,
    }: Post,
  ) => ({
    title,
    slug,
    publishedAtFormatted,
    description: description ?? null,
    body: {
      code: body.code,
    },
    headings:
      (headings as { heading: number; text: string; slug: string }[]) ?? null,
  })
  
  export type FormattedPost = ReturnType<typeof formatPost>