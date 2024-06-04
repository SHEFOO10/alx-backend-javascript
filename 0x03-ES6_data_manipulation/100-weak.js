export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);
  const counter = weakMap.get(endpoint);
  if (counter >= 5) {
    throw new Error('Endpoint load is high');
  }
}
