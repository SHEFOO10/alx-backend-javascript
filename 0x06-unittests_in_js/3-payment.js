const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
  return result;
}

module.exports = sendPaymentRequestToApi;

