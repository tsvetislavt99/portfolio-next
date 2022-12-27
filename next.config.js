/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Make the loading of .md files possible
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };
    return config;
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
