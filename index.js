const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, CORS)
server.use(middlewares);

// Use JSON Server router
server.use(router);

// Listen on port from environment or default 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server running on port ${PORT}`);
});
