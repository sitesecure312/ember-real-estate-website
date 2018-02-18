/**
 * Created by baebae on 4/5/16.
 */
import {createSelector} from 'reselect';

export const numericType$ = state => state.numericValue.type;
export const numericValue$ = state => state.numericValue.value;
export const numericCurrencyType$ = state => state.numericValue.currencyType;
export const numeric$ = createSelector(numericType$, numericValue$, numericCurrencyType$,
  (numericType, numericValue, numericCurrencyType) => ({
    numericType, numericValue, numericCurrencyType
  })
);
