import { ContentLink } from "@/components";
import { formatShortDate, ProjectMeta } from "@/lib";

interface PostPreviewProps {
  meta: ProjectMeta;
}
export default function PostPreview({ meta }: PostPreviewProps) {
  return (
    <ContentLink
      key={meta.slug}
      href={`/progetti/${meta.slug}`}
      className="animate-fadeIn"
    >
      <ContentLink.Title>{meta.title}</ContentLink.Title>

      <ContentLink.Meta>
        <div>{formatShortDate(meta.publishedAt)}</div>
      </ContentLink.Meta>

      {meta.description ? (
        <ContentLink.Text>{meta.description}</ContentLink.Text>
      ) : null}
    </ContentLink>
  );
}
