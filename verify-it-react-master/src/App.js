/**
 * Created by kitty on 11/5/16.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'ReduxStore';
import { default as MainContainer } from './MainContainer';

export const App = () => (
  <Provider store={store}>
    <MainContainer navigator="Profile" />
  </Provider>
);
