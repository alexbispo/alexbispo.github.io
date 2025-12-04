import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
          Alex Bispo
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          projetos, pensamentos, reflexões, opiniões, ...
        </p>
      </div>

      <div className="space-y-10">
        {allPostsData.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
