import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Header() {
    return (
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Terminal className="w-6 h-6" />
                    <span>DevBlog</span>
                </Link>
                <nav className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                        About
                    </Link>
                    <a href="https://github.com/alexbispo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                        GitHub
                    </a>
                </nav>
            </div>
        </header>
    );
}
