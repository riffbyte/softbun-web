/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ['components', 'lib', 'modules', 'pages'],
    },
    images: {
        domains: ['images.ctfassets.net'],
    },
    experimental: {
        newNextLinkBehavior: true,
    },
};

module.exports = nextConfig;
