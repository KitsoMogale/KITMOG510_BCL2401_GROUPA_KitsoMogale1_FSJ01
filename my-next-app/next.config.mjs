/** @type {import('next').NextConfig} */
// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development
  });
  
  module.exports = withPWA({
    // Any other next.js configuration goes here
  });
