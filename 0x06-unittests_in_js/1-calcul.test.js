var assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('calculateNumber', function () {
  it('floating point whole numbers', function() {
    assert.strictEqual(calculateNumber('SUM', 1.0, 3.0), 4);
  });
  it('rounding up b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber('SUM', 1.0, 3.7), 5);
  });
  it('rounding down a, b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.3), 4);
  });
  it('add float to float : Rounded 2', function() {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('rounding downin a, b floating point fractional numbers with tralling 9\'s', () => {
    assert.strictEqual(calculateNumber('SUM', 2.4999999, 4.499999999), 6)
  });
  it('substract floating point whole numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.0, 2.0), 2);
  });
  it('substract floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.0, 2.5), 1);
  });
  it('divide float points whole numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4);
  });
  it('divide floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.0, 2), 2.5);
  });
  it('divide by a zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8.0, 0), 'Error');
  })
});
