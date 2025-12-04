import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-10">
        {allPostsData.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
