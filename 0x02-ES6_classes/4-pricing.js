import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency should be of type Currency');
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static conversionRate(amount, rate) {
    return amount * rate;
  }
}
