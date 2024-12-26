/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "fakestoreapi.com",
      "cdn.topvalue.asia",
      "cdn.topvalue.com",
    ], // Allow images from picsum.photos
  },
};

export default nextConfig;
