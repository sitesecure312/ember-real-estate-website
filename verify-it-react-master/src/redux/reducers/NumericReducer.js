/**
 * Created by baebae on 4/5/16.
 */
import { NumericActions } from 'ReduxActions';

const defaultState = {
  type         : 'Stake',
  value        : 0,
  currencyType : '$'
};

export default function numericReducer(state = defaultState, action) {
  switch (action.type) {

    case NumericActions.UPDATE_NUMERIC_TYPE:
      return Object.assign({}, state, {
        type : action.value,
      });

    case NumericActions.UPDATE_NUMERIC_VALUE:
      return Object.assign({}, state, {
        value : action.value,
      });

    case NumericActions.UPDATE_CURRENCY_TYPE:
      return Object.assign({}, state, {
        currencyType : action.value,
      });
    default:
      return state;
  }
}