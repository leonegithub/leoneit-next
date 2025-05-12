const nextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/it", permanent: true }];
  },
  // altre opzioni qui...
};

export default nextConfig;