const nextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  async redirects() {
    return [{ source: "/", destination: "/it", permanent: true }];
  },
};
