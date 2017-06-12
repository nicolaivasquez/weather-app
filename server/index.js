import express from 'express';

import { getCities } from './data/index';

const port = 9500;
let app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/cities', (req, res) => {
  res.send(getCities(req.query.q || ''));
});

app.listen(port, () => {
  console.log('Server started');
});
