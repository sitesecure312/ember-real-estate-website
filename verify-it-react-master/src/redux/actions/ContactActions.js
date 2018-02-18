/**
 * Created by baebae on 4/6/16.
 */
import { Api } from 'AppServices';
// update contacts info
export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';
const updateContact$ = contacts => ({
  type : UPDATE_CONTACTS,
  contacts
});
export const updateContact = contacts => (dispatch) => {
  dispatch(updateContact$(contacts));
};


export const UPDATE_CONTACT_SEARCH_RESULT = 'UPDATE_CONTACT_SEARCH_RESULT';
const updateSearchResult = searchResult => ({
  type : UPDATE_CONTACT_SEARCH_RESULT,
  searchResult
});


export const searchContact = keyword => (dispatch) => {
  if (keyword.length > 0) {
    Api.search.users({ keyword })
      .then((res) => {
        console.info(`search result: ${keyword}`, res.user);
        dispatch(updateSearchResult(res.user));
      });
  }
};


export const UPDATE_SELECTED_CONTACT = 'UPDATE_SELECTED_CONTACT';
const updatedSelectedContact$ = contact => ({
  type : UPDATE_SELECTED_CONTACT,
  contact
});

export const udpateSelectedContact = (contact) => dispatch => {
  dispatch(updatedSelectedContact$(contact));
};
