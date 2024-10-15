import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true, // Automatically update service worker
  // Other Next.js config options
});

export default nextConfig;
