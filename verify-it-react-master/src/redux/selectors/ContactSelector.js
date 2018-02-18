/**
 * Created by baebae on 4/6/16.
 */
import { createSelector } from 'reselect';

export const contacts$ = state => state.contacts.contacts;
export const selectedContact$$ = state => state.contacts.selectedContact;
export const searchResult$ = state => state.contacts.searchResult;
export const contact$ = createSelector(contacts$, searchResult$, (contacts, searchResult) => ({
  contacts, searchResult
}));

export const selectedContact$ = createSelector(selectedContact$$, (selectedContact) => ({
  selectedContact
}));
