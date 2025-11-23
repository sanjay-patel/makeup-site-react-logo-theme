/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '.*\\.amplifyapp\\.com',
          },
        ],
        destination: 'https://bhumimakeupartistry.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
