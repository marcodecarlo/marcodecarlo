import { Heading } from "@/lib/types";

interface PostTableOfContentsProps {
  headers: Heading[];
}
const PostTableOfContents = ({ headers }: PostTableOfContentsProps) => {
  return (
    <div>
      <div className="mb-2.5 text-xs uppercase text-green-200/30">Indice</div>

      <ul className="space-y-2.5 text-sm">
        {headers.map((header) => {
          return (
            <li key={header.slug}>
              <a
                href={`#${header.slug}`}
                className={`block text-green-200/50 underline-offset-2 transition-all hover:text-green-100 hover:underline hover:decoration-green-200/50 ${
                  header.heading === 2 ? "pl-3" : ""
                } ${header.heading === 3 ? "pl-6" : ""}`}
              >
                {header.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostTableOfContents;
