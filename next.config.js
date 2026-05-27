/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // 启用静态导出
  images: {
    unoptimized: true, // 静态导出时需要禁用图片优化
  },
}

module.exports = nextConfig
