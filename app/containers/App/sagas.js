import { takeEvery, put, takeLatest, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { login } from 'api/user';

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
  const errorMessage = {
    message: 'Invalid Username/Password',
  };

  try {
    const res = yield call(login, { username, password });

    if (res === 'Invalid Username/Password') {
      yield put(signInFailure(errorMessage));
    } else {
      browserHistory.push('/');
      yield put(signInSuccess({
        username,
      }));
    }
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
