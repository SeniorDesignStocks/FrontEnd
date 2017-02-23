import {
  DISPLAY_ERROR,
  REMOVE_ERROR,
  SIGN_IN,
  SIGN_OUT,
  UNFAVORITE,
  UNFAVORITE_SUCCESS,
  ADDFAVORITE,
  ADDFAVORITE_SUCCESS,
} from './constants';
import { browserHistory } from 'react-router';

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

export function signIn(userData) {
  browserHistory.push('/');
  return {
    type: SIGN_IN,
    userData,
  };
}

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
