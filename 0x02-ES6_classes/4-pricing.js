import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  /**
   * @param {number} value
   */
  set amount(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  /**
   * @param {Currency} value
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency Object');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (!Number.isInteger(amount)) {
      throw new TypeError('amount must be a number');
    }
    if (!Number.isInteger(conversionRate)) {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
