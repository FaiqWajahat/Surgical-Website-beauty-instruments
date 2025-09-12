// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // 👈 allows all paths from Cloudinary
      },
      {
        protocol: "https",
        hostname: "www.brandingobeauty.com",
        pathname: "/**", // 👈 allows all images from your site
      },
    ],
  },
};

export default nextConfig;
