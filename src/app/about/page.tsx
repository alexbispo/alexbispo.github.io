import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - DevBlog",
    description: "About me and this blog.",
};

export default function About() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mb-6">
                About Me
            </h1>
            <div className="prose prose-lg dark:prose-invert">
                <p>
                    Hello! I'm a software engineer passionate about building high-quality web applications.
                    This blog is a place where I share my learnings, thoughts, and experiments with new technologies.
                </p>
                <p>
                    I specialize in:
                </p>
                <ul>
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Cloud Architecture</li>
                </ul>
                <p>
                    Feel free to reach out to me via <a href="https://github.com/alexbispo">GitHub</a>.
                </p>
            </div>
        </div>
    );
}
