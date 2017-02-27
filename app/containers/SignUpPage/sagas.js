// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, put, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  signUpSuccess,
  signUpFailure,
} from './actions';
import {
  SIGN_UP,
} from './constants';

export function* postNewAccount({ username, password, email }) {
  if (username.length >= 4 && password.length >= 4 && email.length >= 4) {
    browserHistory.push('/');
    yield put(signUpSuccess({
      username,
      favorites: ['AAPL', 'AASS', 'GOOG'],
    }));
  } else {
    // default error messages before i get more complex ones to return from the server
    yield put(signUpFailure({ username, password, email }));
  }
}

export function* signUp() {
  const watcher = yield takeLatest(SIGN_UP, postNewAccount);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  signUp,
];
