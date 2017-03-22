import { takeEvery, put, takeLatest, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { login } from 'api/user';
import {
  addFavorite as apiAddFavorite,
  removeFavorite as apiRemoveFavorite,
} from 'api/account';

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
} from './constants';

export function* putUnfavorite({ username, stockName }) {
  try {
    yield call(apiRemoveFavorite, { username, stockName });
    yield put(unfavoriteSuccess(stockName));
  } catch (err) {
    yield console.error(err);
  }
}
export function* putAddFavorite({ username, stockName }) {
  try {
    yield call(apiAddFavorite, { username, stockName });
    yield put(addFavoriteSuccess(stockName));
  } catch (err) {
    yield console.error(err);
  }
}

export function* addFavorite() {
  yield takeEvery(ADDFAVORITE, putAddFavorite);
}
export function* unfavorite() {
  yield takeEvery(UNFAVORITE, putUnfavorite);
}

export function* getUserData({ username, password }) {
  const errorMessage = {
    message: 'Invalid Username/Password',
  };

  try {
    const res = yield call(login, { username, password });

    browserHistory.push('/');
    yield put(signInSuccess(res.user));
  } catch (err) {
    yield put(signInFailure(errorMessage));
  }
}

export function* signIn() {
  yield takeLatest(SIGN_IN, getUserData);
}

export default [
  addFavorite,
  unfavorite,
  signIn,
];
