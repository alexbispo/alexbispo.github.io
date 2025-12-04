import { getAllPostSlugs, getPostData } from "@/lib/posts";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const postData = await getPostData(slug);
    return {
        title: `${postData.title} - DevBlog`,
        description: postData.description,
    };
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <article className="max-w-3xl mx-auto">
            <header className="mb-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mb-2">
                    {postData.title}
                </h1>
                <time className="text-gray-500 dark:text-gray-400">
                    {postData.date}
                </time>
            </header>
            <div
                className="prose prose-lg dark:prose-invert mx-auto"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </article>
    );
}
