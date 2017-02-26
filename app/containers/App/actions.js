import {
  DISPLAY_ERROR,
  REMOVE_ERROR,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
  UNFAVORITE,
  UNFAVORITE_SUCCESS,
  ADDFAVORITE,
  ADDFAVORITE_SUCCESS,
} from './constants';

export function displayError(message) {
  return {
    type: DISPLAY_ERROR,
    message,
  };
}

export function removeError() {
  return {
    type: REMOVE_ERROR,
  };
}

export function signIn({ password, username }) {
  return {
    type: SIGN_IN,
    username,
    password,
  };
}

export const signInSuccess = (userData) => ({
  type: SIGN_IN_SUCCESS,
  userData,
});

export const signInFailure = ({ message }) => ({
  type: SIGN_IN_FAILURE,
  message,
});

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export const unfavorite = (stockName) => ({
  type: UNFAVORITE,
  stockName,
});

export const unfavoriteSuccess = (stockName) => ({
  type: UNFAVORITE_SUCCESS,
  stockName,
});

export const addFavorite = (stockName) => ({
  type: ADDFAVORITE,
  stockName,
});

export const addFavoriteSuccess = (stockName) => ({
  type: ADDFAVORITE_SUCCESS,
  stockName,
});
