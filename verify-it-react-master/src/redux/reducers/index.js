/**
 * @providesModule ReduxReducers
 */
import { combineReducers } from 'redux';
import ui_status from './UIReducer';
import numericValue from './NumericReducer';
import contacts from './ContactReducer';
import account from './AccountReducer';
import contracts from './ContractReducer';
import events from './EventReducer';

export default combineReducers({
  ui_status,
  numericValue,
  contacts,
  account,
  contracts,
  events
});