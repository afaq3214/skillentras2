/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // The Insights page became the SPDC page; keep old links working.
      {
        source: "/insights",
        destination: "/spdc",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
