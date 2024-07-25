var assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('calculateNumber', function () {
  it('Add int to int', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('Add int to float', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('Add float to float : Rounded 1', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('Add float to float : Rounded 2', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
