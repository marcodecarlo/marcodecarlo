import Link from "next/link";
import { FormattedPost } from "@/lib";
import { Left, PostTableOfContents, ScrollToTop } from "@/components";
import { useMDXComponent } from "next-contentlayer/hooks";
import Balancer from "react-wrap-balancer";
import { components } from "@/lib/mdx";

export default function Post({ post }: { post: FormattedPost }) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      <div className="mt-24 mb-4 xl:!col-end-5">
        <Link
          href="/progetti"
          className="group inline-flex items-center space-x-2"
        >
          <div className="transition rounded-full bg-green-200/10 p-1 text-green-200/80 group-hover:bg-green-200/25 group-hover:text-green-200">
            <div className="w-4 group-hover:scale-125 transition-transform group-active:scale-110">
              <Left />
            </div>
          </div>
          <div className="mt-0.5 text-green-200/70 group-hover:text-green-200/90 transition">
            Tutti Progetti
          </div>
        </Link>

        <h1 className="mt-6 text-2xl font-medium sm:text-4xl">
          <Balancer>{post.title}</Balancer>
        </h1>

        <div className="mt-4 flex space-x-2 text-green-200/50">
          <div>{post.publishedAtFormatted}</div>
        </div>
      </div>

      <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-3 xl:block">
        <div className="space-y-6">
          {post.headings ? (
            <>
              <PostTableOfContents headings={post.headings} />
              <div className="border-t-2 border-green-200/5"></div>
            </>
          ) : null}

          <ScrollToTop>
            {" "}
            <Left /> {`Torna all'inizio`}
          </ScrollToTop>
        </div>
      </div>

      <MDXContent components={components} />
      <div className="mb-8"></div>
    </>
  );
}
