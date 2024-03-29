/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ['components', 'lib', 'modules', 'pages'],
    },
    images: {
        domains: ['images.ctfassets.net'],
    },
    experimental: { appDir: true },
};

module.exports = nextConfig;
