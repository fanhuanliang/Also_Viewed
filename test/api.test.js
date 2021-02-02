const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/index');

describe('API Tests', () => {
  it('Should get a response 200 given a GET top-picks', (done) => {
    request(app)
      .get('/api/top-picks/fetch')
      .expect(200, done);
  });

  it('Should get a response 200 given a GET ultimately-bought', (done) => {
    request(app)
      .get('/api/ultimately-bought/fetch')
      .expect(200, done);
  });

  it('Should get a response 200 given a GET ultimately-bought/fetch-all', (done) => {
    request(app)
      .get('/api/ultimately-bought/fetch-all')
      .expect(200, done);
  });
});

afterAll(() => {
  mongoose.connection.close();
});