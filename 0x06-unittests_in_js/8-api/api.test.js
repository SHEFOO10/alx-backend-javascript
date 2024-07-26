const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = "http://localhost:7865";
  let response;

  before((done) => {
    request(url, (err, res, body) => {
      if (err) return done(err);
      response = { statusCode: res.statusCode, body };
      done();
    });
  });
  it('should return a 200 status code', (done) => {
    if (!response) return done(new Error('An Error Occured'));
    expect(response.statusCode).to.equal(200);
    done();
  });
  it('should return the expected response body', (done) => {
    if (!response) return done(new Error('An Error Occured'));
    expect(response.body).to.equal('Welcome to the payment system');
    done();
  });
});
