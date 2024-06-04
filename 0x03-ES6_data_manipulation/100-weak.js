export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const counter = weakMap.get(endpoint);
    if (counter >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
