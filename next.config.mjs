/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s2.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "127.0.0.1",
      },
    ],
  },
};

export default nextConfig;
