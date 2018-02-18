/**
 * Created by baebae on 4/6/16.
 */
import { ContractActions } from 'ReduxActions';

const defaultState = {
  contracts : [],
};

export default function contractReducer(state = defaultState, action) {
  switch (action.type) {

    case ContractActions.UPDATE_CONTRACT_RESULT:
      const oldContracts = state.contracts;
      if (oldContracts.page !== action.contracts.page) {
        const ret = Object.assign({}, state, {
          contracts : action.contracts,
        });
        if (ret.contracts.page !== oldContracts.page) {
          if (oldContracts && oldContracts.docs) {
            ret.contracts.docs = oldContracts.docs.concat(action.contracts.docs);
          }
        }
        return ret;
      }
      return state;
    default:
      return state;
  }
}