/**
 * Created by baebae on 4/6/16.
 */
import { Api, localStorage } from 'AppServices';

export const UPDATE_TOKEN = 'UPDATE_TOKEN';
const updateToken$ = token => ({
  type : UPDATE_TOKEN,
  token
});

export const UPDATE_LOGIN_USER = 'UPDATE_LOGIN_USER';
const updateUser$ = user => ({
  type : UPDATE_LOGIN_USER,
  user
});

export const login = param => (dispatch) => {
  Api.account.login(null, param)
    .then((res) => {
      localStorage.set('token', res.token);
      const user = { name: res.token_for };
      dispatch(updateToken$(res.token));
      dispatch(updateUser$(user));
    });
};

export const updateToken = token => (dispatch) => {
  dispatch(updateToken$(token));
};
