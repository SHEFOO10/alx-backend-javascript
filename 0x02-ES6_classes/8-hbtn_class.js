export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * @param {int} value
   */
  set size(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError('size must be a number');
    }
    this._size = value;
  }

  get size() {
    return this._size;
  }

  /**
   * @param {string} value
   */
  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = value;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
