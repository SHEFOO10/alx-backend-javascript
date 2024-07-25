const { expect } = require('chai')
const calculateNumber = require('./2-calcul_chai')

describe('calculateNumber', function () {
  it('floating point whole numbers', function() {
    expect(calculateNumber('SUM', 1.0, 3.0)).to.equal(4);
  });
  it('rounding up b\'s floating point fractional number', function() {
    expect(calculateNumber('SUM', 1.0, 3.7)).to.equal(5);
  });
  it('rounding down a, b\'s floating point fractional numbers', function() {
    expect(calculateNumber('SUM', 1.2, 3.3)).to.equal(4);
  });
  it('add float to float : Rounded 2', function() {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('rounding downin a, b floating point fractional numbers with tralling 9\'s', () => {
    expect(calculateNumber('SUM', 2.4999999, 4.499999999)).to.equal(6)
  });
  it('substract floating point whole numbers', () => {
    expect(calculateNumber('SUBTRACT', 4.0, 2.0)).to.equal(2);
  });
  it('substract floating point fractional numbers', () => {
    expect(calculateNumber('SUBTRACT', 4.0, 2.5)).to.equal(1);
  });
  it('divide float points whole numbers', () => {
    expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4);
  });
  it('divide floating point fractional numbers', () => {
    expect(calculateNumber('DIVIDE', 5.0, 2)).to.equal(2.5);
  });
  it('divide by a zero', () => {
    expect(calculateNumber('DIVIDE', 8.0, 0)).to.equal('Error');
  })
});
