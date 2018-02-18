/**
 * Created by baebae on 4/05/16.
 */
import { UIActions } from 'ReduxActions';

const defaultState = {
  sidebar: false,
};

export default function uiReducer(state = defaultState, action) {
  switch (action.type) {

    case UIActions.UPDATE_SIDEBAR_SHOW_STATUS:
      return {
        sidebar: !state.sidebar,
      };
    default:
      return state;
  }
}