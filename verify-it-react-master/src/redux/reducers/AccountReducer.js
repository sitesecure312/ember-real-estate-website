/**
 * Created by baebae on 5/7/16.
 */

import { AccountActions } from 'ReduxActions';

const defaultState = {
  token : '',
  user  : {
    name : 'test'
  }
};

export default function AccountReducer(state = defaultState, action) {
  switch (action.type) {
    case AccountActions.UPDATE_TOKEN:
      return Object.assign({}, state, {
        token : action.token,
      });
    case AccountActions.UPDATE_LOGIN_USER:
      return Object.assign({}, state, {
        user : action.user,
      });
    default:
      return state;
  }
}