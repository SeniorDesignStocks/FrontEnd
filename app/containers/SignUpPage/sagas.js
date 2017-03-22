// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, put, call, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { register } from 'api/user';
import {
  signUpSuccess,
  signUpFailure,
} from './actions';
import {
  SIGN_UP,
} from './constants';

export function* postNewAccount({ username, password, email }) {
  try {
    const res = yield call(register, { username, password, email });

    browserHistory.push('/');
    yield put(signUpSuccess(res.user));
  } catch (err) {
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
