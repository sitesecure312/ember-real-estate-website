/**
 * Created by baebae on 4/6/16.
 */
import { Api } from 'AppServices';

export const UPDATE_EVENT_SEARCH_RESULT = 'UPDATE_EVENT_SEARCH_RESULT';
const updateSearchEventResult = searchResult => ({
  type : UPDATE_EVENT_SEARCH_RESULT,
  searchResult
});


export const searchEventByCity = keyword => (dispatch) => {
  if (keyword.length > 0) {
    Api.search.getEventByCity({ keyword })
      .then((res) => {
        const events = JSON.parse(res.text);
        console.info(`search result: ${keyword}`, events.data);
        dispatch(updateSearchEventResult(events.data));
      });
  }
};

export const searchEventByBrand = keyword => (dispatch) => {
  if (keyword.length > 0) {
    Api.search.getEventByBrand({ keyword })
      .then((res) => {
        console.info(`search event result: ${keyword}`, res.data);
        dispatch(updateSearchEventResult(res));
      });
  }
};

export const searchNearEvent = () => (dispatch) => {
  Api.search.getNearEvent()
    .then((res) => {
      console.info('search result: ', res.data);
      dispatch(updateSearchEventResult(res.data));
    });
};

export const UPDATE_SELECTED_EVENT = 'UPDATE_SELECTED_EVENT';
const updateSelectedEvent$ = selected => ({
  type : UPDATE_SELECTED_EVENT,
  selected
});
export const updateSelectedEvent = selected => (dispatch) => {
  dispatch(updateSelectedEvent$(selected));
};