const fs = require('fs');
const request = require('supertest');
const {makeServer} = require('./server');
const server = makeServer();

const TEST_TEXT_FILE = './src/testText.txt';

describe('basic-server', function () {
  it('responds to /', function (done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('responds contains testText.txt contents', function (done) {
    request(server)
      .get('/')
      .expect(200, fs.readFileSync(TEST_TEXT_FILE, 'utf8'), done);
  });

  it('parses the test text when the paragraph parameter exists', function (done) {
    let expectedResult = fs.readFileSync(TEST_TEXT_FILE, 'utf8')
      .split("\n\n")
      .slice(0, 3)
      .join("\n\n");


    request(server)
      .get('/?paragraphs=3')
      .expect(200, expectedResult, done);
  });

  it('returns a 500 error if any problem happens', function (done) {
    request(server).get('/?paragraphs=error')
      .expect(500, done);
  });

  it('returns a 404 error if the specified route does not exist', function (done) {
    request(server).get('/invalid-url')
      .expect(404, done);
  });
});
