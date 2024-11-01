import { useId } from "react";
import { ContentLink } from "../common/ContentLink";

const PostPreviewSkeleton = () => {
  const id = useId();

  return (
    <ContentLink
      key={id}
      href="#"
      className="[&>h3]:animate-pulse [&>p]:animate-pulse font-skeleton"
    >
      <ContentLink.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ContentLink.Title>

      <ContentLink.Meta>
        <div className="animate-pulse">20 Sett</div>
      </ContentLink.Meta>

      <ContentLink.Text>
        Pellentesque arcu enim, euismod non quam placerat, blandit condimentum
        quam. Quisque vitae tellus vehicula, sollicitudin tortor et, porta nisi.
      </ContentLink.Text>
    </ContentLink>
  );
};

export default PostPreviewSkeleton;
