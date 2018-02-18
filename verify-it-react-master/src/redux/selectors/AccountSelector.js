/**
 * Created by baebae on 4/6/16.
 */
import { createSelector } from 'reselect';

export const token$ = state => state.account.token;
export const user$ = state => state.account.user;
export const account$ = createSelector(token$, (token) => ({
  token
}));
