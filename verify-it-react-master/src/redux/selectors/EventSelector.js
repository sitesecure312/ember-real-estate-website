/**
 * Created by baebae on 4/6/16.
 */
import {createSelector} from 'reselect';

export const searchResult$ = state => state.events.searchResult;
export const selectedEvent$$ = state => state.events.selectedEvent;
export const event$ = createSelector(searchResult$, (searchResult) => ({
  searchResult
}));
