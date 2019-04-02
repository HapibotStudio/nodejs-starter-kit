const app = require('./server/server');

const config = {
  dev: 'development',
  test: 'test',
  prod: 'production',
  port: process.env.EXPRESS_PORT || 3000
};
const port = process.env.EXPRESS_PORT || 3000;

// Start listening
app.listen(port, () => {
  console.log('Server started http://localhost:%s', port);
});
