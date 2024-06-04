export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const objectProperties = Object.getOwnPropertyNames(endpoint);

  if (objectProperties.includes('name') && objectProperties.includes('protocol')) {
    const counter = weakMap.get(endpoint);
    if (counter >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (counter || 0) + 1);
  }
}
