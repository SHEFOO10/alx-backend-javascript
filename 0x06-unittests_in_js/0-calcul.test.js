var assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('calculateNumber', function () {
  it('add int to int', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('add int to float', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('add float to float : Rounded 1', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('add float to float : Rounded 2', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
