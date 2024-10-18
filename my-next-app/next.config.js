const withPWA = require('next-pwa')({
  dest: 'public', // Service worker is placed here
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable in development
});

module.exports = withPWA({
  experimental: {
    appDir: true, // Enable the app directory
  },
  // Other next.js configurations
});

