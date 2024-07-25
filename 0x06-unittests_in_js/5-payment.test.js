const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
	  logSpy.restore();
  });

  it('should call calculateNumber with "SUM", 100, and 20', () => {
    // Call the function to test
    const result = sendPaymentRequestToApi(100, 20);

    // Verify that log was called with the correct message
    expect(logSpy.calledWith('The total is: 120')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  });
  it('should call calculateNumber with "SUM", 10, and 10', () => {
	  // Call the function to test
	  const result = sendPaymentRequestToApi(10, 10);
	  // Verify that log was called with the correct message
	  expect(logSpy.calledWith('The total is: 20')).to.be.true;
	  expect(logSpy.calledOnce).to.be.true;
  });
});
