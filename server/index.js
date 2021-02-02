const connection = require('../database/connection');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const models = require('./models');

const PORT = 1337;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/api/top-picks/fetch', (req, res) => {
  models.fetchAlsoViewed((err, data) => {
    if (err) {
      res.statusCode = 400;
      res.end();
    } else {
      res.statusCode = 200;
      res.send(data);
    }
  });
});

app.get('/api/ultimately-bought/fetch', (req, res) => {
  models.fetchBought((err, data) => {
    if (err) {
      res.statusCode = 400;
      res.end();
    } else {
      res.statusCode = 200;
      res.send(data);
    }
  });
});

// For testing to see all data, will only need to fetch one //
app.get('/api/ultimately-bought/fetch-all', (req, res) => {
  models.fetchAllBought((err, data) => {
    if (err) {
      res.statusCode = 400;
      res.end();
    } else {
      res.statusCode = 200;
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`App server listening at port: ${PORT}`);
});

module.exports = app;
