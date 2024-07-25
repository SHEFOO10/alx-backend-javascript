function calculateNumber(type, a, b) {
  const operations = {
    'SUM': (a, b) => Math.round(a) + Math.round(b),
    'SUBTRACT': (a, b) => Math.round(a) - Math.round(b),
    'DIVIDE': (a, b) => Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b)
  }
  return operations[type](a, b);
}

module.exports = calculateNumber;
