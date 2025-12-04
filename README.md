# Personal Blog Walkthrough

I have successfully created a minimalist personal blog using Next.js, TypeScript, and Tailwind CSS, configured for static export to GitHub Pages.

## Features Implemented

- **Static Site Generation (SSG)**: Fully static output ready for GitHub Pages.
- **Markdown Support**: Blog posts are written in Markdown with front-matter.
- **Clean Design**: Minimalist aesthetic using Tailwind CSS and Typography plugin.
- **Responsive**: Works on desktop and mobile.
- **Dark Mode Support**: Uses system preference (via Tailwind `dark:` classes).

## Project Structure

- `content/posts/`: Directory for Markdown blog posts.
- `src/app/`: App Router pages (`page.tsx`, `about/page.tsx`, `blog/[slug]/page.tsx`).
- `src/components/`: Reusable UI components (`Header`, `Footer`, `PostCard`).
- `src/lib/posts.ts`: Utilities for processing Markdown files.
- `next.config.ts`: Configured with `output: 'export'` and `basePath` placeholder.

## How to Add a New Post

1. Create a new `.md` file in `content/posts/`.
2. Add front-matter at the top:
   ```markdown
   ---
   title: "My New Post"
   date: "2023-11-01"
   description: "A short summary of the post."
   ---
   ```
3. Write your content in Markdown.
4. Run `npm run dev` to preview.

## Deployment

The project includes a GitHub Actions workflow `.github/workflows/deploy.yml` that automatically deploys to GitHub Pages on push to `main`.

> [!IMPORTANT]
> **Configuration Required**: Before deploying, update `next.config.ts` if your repository is not at the root domain (e.g., `username.github.io/repo-name`). Uncomment and set the `basePath` property.

## Verification

I have verified the build locally using `npm run build`. The output is generated in the `out/` directory, containing static HTML files for all pages and posts.
