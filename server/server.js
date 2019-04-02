const express = require('express');

const app = express();
const api = require('./api/api');

// Middlewares setup
require('./config/middlewares')(app);

// Routes
app.use('/api', api);

app.use((err, req, res) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send({ error: 'Invalid token' });
  }
  return res.status(500).send({ error: 'Something went wrong.' });
});

module.exports = app;
