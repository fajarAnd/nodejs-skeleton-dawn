/* global before after */
const supertest = require('supertest');
const { assert } = require('chai');
const app = require('../app/server');

const server = supertest(app);

before((done) => {
  // TODO: Seed Data
  done();
});

require('./ping.test')(server, assert);

after((done) => {
  // TODO: Delete Seed Data
  done();
});
