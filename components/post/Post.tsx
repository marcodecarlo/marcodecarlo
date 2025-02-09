import { formatShortDate, Project } from "@/lib";
import { Button, Left, PostTableOfContents, Sidebar } from "@/components";
import styles from "./Post.module.scss";

interface PostProps {
  post: Project;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <div className={styles["header"]}>
        <Button href="/progetti" label="Tutti Progetti" icon={<Left />} />

        <h1 className={styles["title"]}>{post.meta.title}</h1>

        <div className={styles["info"]}>
          <div>{formatShortDate(post.meta.publishedAt)}</div>
        </div>
      </div>

      <Sidebar>
        {post.headings ? (
          <>
            <PostTableOfContents headers={post.headings} />
            <div className="border-t-2 border-green-200/5"></div>
          </>
        ) : null}
      </Sidebar>
      {post.content}
      <div className="mb-8"></div>
    </>
  );
}
