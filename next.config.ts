import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath is not required for User/Organization Pages (e.g. username.github.io)
  // It is only needed for Project Pages (e.g. username.github.io/repo-name)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
