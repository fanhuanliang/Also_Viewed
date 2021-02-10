/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
const connection = require('../database/connection');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const models = require('./models');
require('newrelic');

const PORT = 1337;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/api/top-picks/fetch/:id', (req, res) => {
  models.fetchAlsoViewed(req.params.id, (err, data) => {
    if (err) {
      // console.log('sth wrong')
      res.statusCode = 400;
      res.end();
    } else {
      res.statusCode = 200;
      // console.log('ok')
      // console.log(JSON.parse(data[0].related))
      // res.send(JSON.parse(data[0].related));
      res.send(data[0].related);
    }
  });
});

app.get('/api/ultimately-bought/fetch/:id', (req, res) => {
  models.fetchBought(req.params.id, (err, data) => {
    if (err) {
      res.statusCode = 400;
      res.end();
    } else {
      res.statusCode = 200;
      // console.log(data)
      // console.log('data')
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
