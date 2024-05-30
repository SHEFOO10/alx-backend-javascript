/**
 * @class SFO
 * @constructor
 * @param {string} name
 * @param {string} code
 */
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * @param {string} value
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  /**
   * @param {int} value
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
