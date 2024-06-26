export default function cleanSet(set, startString) {
  const matchArray = [];
  if (typeof startString !== 'string' || startString === '' || !(set instanceof Set)) {
    return '';
  }
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      matchArray.push(value.slice(startString.length));
    }
  });
  return matchArray.join('-');
}
