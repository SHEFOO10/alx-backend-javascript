const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with "SUM", 100, and 20', () => {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log');
    // Call the function to test
    const result = sendPaymentRequestToApi(100, 20);

    // Verify that calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledWith('The total is: 10')).to.be.true;
    // Verify the result
    expect(result).to.equal(10); // Assuming your sendPaymentRequestToApi adds 100 and 20

    // Restore the original function
    calculateNumberSpy.restore();
  });
});
