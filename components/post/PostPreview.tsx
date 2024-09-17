import { formatPostPreview } from "@/lib";
import { ContentLink } from "@/components";

export default function PostPreview(
  post: ReturnType<typeof formatPostPreview>
) {
  return (
    <ContentLink
      key={post.slug}
      href={`/progetti/${post.slug}`}
      className="animate-fadeIn"
    >
      <ContentLink.Title>{post.title}</ContentLink.Title>

      <ContentLink.Meta>
        <div>{post.publishedAtFormatted}</div>
      </ContentLink.Meta>

      {post.description ? (
        <ContentLink.Text>{post.description}</ContentLink.Text>
      ) : null}
    </ContentLink>
  );
}
