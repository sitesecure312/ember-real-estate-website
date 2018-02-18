/**
 * Created by baebae on 4/6/16.
 */
import { ContactActions } from 'ReduxActions';

const defaultState = {
  contacts        : [],
  searchResult    : [],
  selectedContact : {
    name : 'test',
  }
};

export default function contactReducer(state = defaultState, action) {
  switch (action.type) {

    case ContactActions.UPDATE_CONTACTS:
      return Object.assign({}, state, {
        contacts : action.contacts,
      });
    case ContactActions.UPDATE_SELECTED_CONTACT:
      return Object.assign({}, state, {
        selectedContact : action.contact,
      });
    case ContactActions.UPDATE_CONTACT_SEARCH_RESULT:
      return Object.assign({}, state, {
        searchResult : action.searchResult,
      });
    default:
      return state;
  }
}