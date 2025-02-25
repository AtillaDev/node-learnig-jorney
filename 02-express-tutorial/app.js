// const express = require('express');
// const app = express();

const app = require('express')();

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.end('About Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>404. Page not found!</h1>');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
