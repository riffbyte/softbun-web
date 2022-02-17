/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ['components', 'lib', 'pages'],
    },
    images: {
        domains: ['images.ctfassets.net'],
    },
};

module.exports = nextConfig;
