import { PostPreviewSkeleton } from "@/components";

export default function Loading() {
  return (
    <div className="mt-8 space-y-10">
      {Array.from({ length: 3 }).map((_, index) => {
        return <PostPreviewSkeleton key={index} />;
      })}
    </div>
  );
}
