import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { PostMetadata } from '@/lib/posts';

export default function PostCard({ post }: { post: PostMetadata }) {
    return (
        <article className="group relative flex flex-col items-start">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                </Link>
            </h2>
            <time dateTime={post.date} className="relative z-10 order-first mb-3 flex items-center text-sm text-gray-500 dark:text-gray-400 pl-3.5">
                <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-700" />
                </span>
                {format(parseISO(post.date), 'MMMM d, yyyy')}
            </time>
            <p className="relative z-10 mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {post.description}
            </p>
            <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                Read article
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </div>
        </article>
    );
}
