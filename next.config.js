const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})
const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
  redirects: async () => {
    return [
    ];
  },
  rewrites: async () => [
  ],
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
  tyledComponents: true
}
