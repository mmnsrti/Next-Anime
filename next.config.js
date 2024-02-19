/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:'https://nextanime.netlify.app/'
  ,
  images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
