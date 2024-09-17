import { FormattedPost } from "@/lib";

const PostTableOfContents = ({
  headings,
}: {
  headings: NonNullable<FormattedPost["headings"]>;
}) => {
  return (
    <div>
      <div className="mb-2.5 text-xs uppercase text-green-200/30">Indice</div>

      <ul className="space-y-2.5 text-sm">
        {headings.map((heading) => {
          return (
            <li key={heading.slug}>
              <a
                href={`#${heading.slug}`}
                className={`block text-green-200/50 underline-offset-2 transition-all hover:text-green-100 hover:underline hover:decoration-green-200/50 ${
                  heading.heading === 2 ? "pl-3" : ""
                } ${heading.heading === 3 ? "pl-6" : ""}`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostTableOfContents;
