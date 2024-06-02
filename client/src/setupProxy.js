const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/', // Adjust to your backend API route
    createProxyMiddleware({
      target: 'https://chat-nodejs-mongodb-ket5atbrj-ankitkumarsharma1s-projects.vercel.app', // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};