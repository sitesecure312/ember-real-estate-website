/**
 * Created by baebae on 4/5/16.
 */

import fx from 'money';
import { _externalRequest } from './api';

export class CurrencyUtils {

  static flagInitialized = false;

  static initialize() {
    if (!CurrencyUtils.flagInitialized) {
      _externalRequest('get', 'https://openexchangerates.org/api/latest.json?app_id=f7b71ca45910443da521e299c2f08433')
        .then((res) => {
          fx.rates = res.rates;
          CurrencyUtils.flagInitialized = true;
        }
      );
    }
  }
  static getCurrencyName(type) {
    if (type === '$') {
      return 'USD';
    } else if (type === '€') {
      return 'EUR';
    } else if (type === '¥') {
      return 'CNY';
    } else if (type === '£' || type === '₤') {
      return 'GBP';
    }
    return '';
  }
  static convertCurrency(value, fromType, toType) {
    if (CurrencyUtils.flagInitialized) {
      const from = this.getCurrencyName(fromType);
      const to = this.getCurrencyName(toType);
      if (from !== '' && to !== '') {
        const convertParam = { from, to };
        return fx.convert(value, convertParam);
      }
      return 0;
    }
    return CurrencyUtils.initialize();
  }
}