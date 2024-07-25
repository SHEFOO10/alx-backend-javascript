var assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('calculateNumber', function () {
  it('floating point whole numbers', function() {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });
  it('rounding up b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.0, 3.7), 5);
  });
  it('rounding down a, b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(1.2, 3.3), 4);
  });
  it('add float to float : Rounded 2', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('rounding downin a, b floating point fractional numbers with tralling 9\'s', () => {
    assert.strictEqual(calculateNumber(2.4999999, 4.499999999), 6)
  })
});
