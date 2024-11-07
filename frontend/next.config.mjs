// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'allmovieshub.gay',
          port: '', // Leave empty for default ports (80 for HTTP and 443 for HTTPS)
          pathname: '/wp-content/uploads/**', // Match all images in this folder
        },
      ],
    },
  };
  
  export default nextConfig;
  