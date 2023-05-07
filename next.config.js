/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ['app', 'components', 'lib'],
    },
    images: {
        domains: ['images.ctfassets.net', 'cdn.uc.assets.prezly.com'],
    },
};

module.exports = nextConfig;
