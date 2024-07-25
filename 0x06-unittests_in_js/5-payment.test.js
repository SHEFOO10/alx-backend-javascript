const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with "SUM", 100, and 20', () => {
    // Create a spy for the log
    const logSpy = sinon.spy(console, 'log');
    // Call the function to test
    const result = sendPaymentRequestToApi(100, 20);

    // Verify that log was called with the correct message
    expect(logSpy.calledWith('The total is: 120')).to.be.true;
    // Restore the original function
    logSpy.restore();
  });
  it('should call calculateNumber with "SUM", 10, and 10', () => {
        // Create a spy for the log
	  const logSpy = sinon.spy(console, 'log');
	  // Call the function to test
	  const result = sendPaymentRequestToApi(10, 10);
	  // Verify that log was called with the correct message
	  expect(logSpy.calledWith('The total is: 20')).to.be.true;
  });
});
