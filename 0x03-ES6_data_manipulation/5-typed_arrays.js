export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const array8bit = new Int8Array(arrayBuffer);
  if (position < array8bit.length) {
    array8bit[position] = value;
  }
  return arrayBuffer;
}
