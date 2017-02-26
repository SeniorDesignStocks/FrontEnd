import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import {
  unfavoriteSuccess,
  addFavoriteSuccess,
  signInSuccess,
  signInFailure,
} from './actions';
import {
  UNFAVORITE,
  ADDFAVORITE,
  SIGN_IN,
  SIGN_UP,
} from './constants';

export function* putUnfavorite({ stockName }) {
  yield put(unfavoriteSuccess(stockName));
}
export function* putAddFavorite({ stockName }) {
  yield put(addFavoriteSuccess(stockName));
}

export function* addFavorite() {
  yield takeEvery(ADDFAVORITE, putAddFavorite);
}
export function* unfavorite() {
  yield takeEvery(UNFAVORITE, putUnfavorite);
}

export function* getUserData({ username, password }) {
  if (username === 'test' && password === 'test') {
    browserHistory.push('/');
    yield put(signInSuccess({
      favorites: ['AAPL', 'AASS', 'GOOG'],
      username,
    }));
  } else {
    yield put(signInFailure({
      message: 'Invalid username or password',
    }));
  }
}

export function* signIn() {
  yield takeLatest(SIGN_IN, getUserData);
}

export function* signUp() {
  yield takeLatest(SIGN_UP, postNewAccount);
}

export default [
  addFavorite,
  unfavorite,
  signIn,
];
