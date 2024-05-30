export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      this.evacuationWarningMessage();
    }
    this.sqft = sqft;
  }

  /**
   * @param {int} value
   */
  set sqft(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  /* eslint-disable */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
