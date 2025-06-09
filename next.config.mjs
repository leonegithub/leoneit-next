const nextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/it", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "php.leone.it",
        pathname: "/img/**"
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**"
      }
    ]
  }

};

export default nextConfig;