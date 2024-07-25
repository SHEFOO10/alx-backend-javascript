const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test payment token', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.be.an('object');
      expect(result.data).to.equal('Successful response from the API');
      done();
    }).catch((err) => done(err));
  });
});
