/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Export static HTML for GitHub Pages
  output: 'export',
  // Use a basePath if your Pages site is served from a subpath (e.g., username.github.io/repo)
  // basePath: '/Project-Website',
}

export default nextConfig
