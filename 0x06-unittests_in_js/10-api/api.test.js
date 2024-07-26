const request = require('request');
const { expect, assert } = require('chai');

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

  it('should return statusCode 200, (text) Payment methods for cart :id -> number', (done) => {
    request('http://localhost:7865/cart/4', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal('Payment methods for cart 4');
      done();
    });
  });

  it('should return statusCode 404, (empty) if id is not a number', (done) => {
    request('http://localhost:7865/cart/string', (err, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
  it('should return Welcome :username -> username = Betty', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'Betty'} }, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
  it('available payment methods should return specific format', (done) => {
    request('http://localhost:7865/available_payments', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      assert.deepEqual(JSON.parse(body), { "payment_methods": { "credit_cards": true, "paypal": false } });
      done();
    });
  });
});
