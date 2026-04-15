/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Fix webpack cache serialization issues with CSS warnings
    if (!isServer) {
      config.ignoreWarnings = [
        /webpack.cache.PackFileCacheStrategy.*No serializer registered for Warning/,
      ];
    }
    
    return config;
  },
};

export default nextConfig;
