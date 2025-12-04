import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Alex Bispo",
    description: "Meus artigos sobre engenharia de software e tecnologia.",
};

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mb-8">
                Blog
            </h1>
            <div className="space-y-10">
                {allPostsData.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}
