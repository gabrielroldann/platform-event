/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "savefiles-local.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
