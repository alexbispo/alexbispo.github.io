import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // IMPORTANT: Change this to your repository name if deploying to GitHub Pages project site
  // e.g. basePath: '/my-blog',
  // basePath: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
