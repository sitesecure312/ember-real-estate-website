/**
 * Created by baebae on 5/6/16.
 */
import { EventActions } from 'ReduxActions';

const defaultState = {
  selectedEvent : {},
  searchResult  : [
    // {
    //   "date_string" : "06.04.2016",
    //   "longitude" : null,
    //   "latitude" : null,
    //   "country" : "United States",
    //   "city" : "Las Vegas",
    //   "event_description" : "",
    //   "event_name" : "Event #3: $10,000 Seven Card Stud Championship",
    //   "game_limit" : "NL",
    //   "buy_in" : "$10,000",
    //   "buy_in_amount" : 10000,
    //   "game_type" : "7 card stud",
    //   "event_brand" : "WSOP",
    // },
    // {
    //   "date_string" : "06.05.2016",
    //   "longitude" : null,
    //   "latitude" : null,
    //   "country" : "United States",
    //   "city" : "Las Vegas",
    //   "event_description" : "",
    //   "event_name" : "Event #4: $1000 Top Up Turbo No-Limit Hold'em",
    //   "game_limit" : "NL",
    //   "game_type" : "hold em",
    //   "buy_in" : "$1000",
    //   "buy_in_amount" : 1000,
    //   "event_brand" : "WSOP",
    // }
  ],
};

export default function eventReducer(state = defaultState, action) {
  switch (action.type) {
    case EventActions.UPDATE_EVENT_SEARCH_RESULT:
      return Object.assign({}, state, {
        searchResult : action.searchResult,
      });
      break;
    case EventActions.UPDATE_SELECTED_EVENT:
      return Object.assign({}, state, {
        selectedEvent : action.selected,
      });
      break;
      break;
    default:
      return state;
  }
}