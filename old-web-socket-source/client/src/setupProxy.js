const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/', // Adjust to your backend API route
    createProxyMiddleware({
      target: 'https://chat-application-react-mern.onrender.com', // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};