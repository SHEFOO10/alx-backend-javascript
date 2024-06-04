export default function cleanSet(set, startString) {
  const matchArray = [];
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      matchArray.push(value.slice(startString.length));
    }
  });
  return matchArray.join('-');
}
