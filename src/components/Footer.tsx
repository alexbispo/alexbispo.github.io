export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 py-8 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} Alex Bispo. All rights reserved.</p>
                <p className="mt-2">
                    Built with <a href="https://nextjs.org" className="underline hover:text-gray-900 dark:hover:text-gray-100">Next.js</a> and <a href="https://tailwindcss.com" className="underline hover:text-gray-900 dark:hover:text-gray-100">Tailwind CSS</a>.
                </p>
            </div>
        </footer>
    );
}
