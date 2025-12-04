export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 py-8 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} Alex Bispo. All rights reserved.</p>
            </div>
        </footer>
    );
}
