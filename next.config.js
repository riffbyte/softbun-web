/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ['components', 'lib', 'pages'],
    },
};

module.exports = nextConfig;
