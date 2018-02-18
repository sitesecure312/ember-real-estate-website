/**
 * Created by baebae on 4/5/16.
 */
import { createSelector } from 'reselect';

// account-wide selector
export const sidebar$ = state => state.ui_status.sidebar;

export const sidebar$$ = createSelector(sidebar$, sidebar => ({
  sidebar
}));

