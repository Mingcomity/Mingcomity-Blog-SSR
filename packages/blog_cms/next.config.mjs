/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ljcdn.com'
      },
      {
        protocol: 'https',
        hostname: '**.music.126.net'
      },
      {
        protocol: 'http',
        hostname: '**.music.126.net'
      },
      {
        protocol: 'https',
        hostname: '**.jd.com'
      }
    ],
    // deviceSizes: [100, 500, 1100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    styledComponents: true
  }
}

export default nextConfig
