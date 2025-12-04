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
            <div className="space-y-10">
                {allPostsData.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}
