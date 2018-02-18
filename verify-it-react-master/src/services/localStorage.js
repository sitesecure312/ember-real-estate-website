/**
 * Created by baebae on 4/6/16.
 */
/**
 * LocalStorage Wrapper
 */

import { AsyncStorage } from 'react-native';

const base = '@together-';
export class localStorage {
  static set(key, value) {
    return AsyncStorage.setItem(`${base}${key}`, value.toString());
  }

  static get(key) {
    return AsyncStorage.getItem(`${base}${key}`);
  }

  static remove(key) {
    return AsyncStorage.removeItem(`${base}${key}`);
  }

  static clear() {
    return AsyncStorage.clear();
  }
}
