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