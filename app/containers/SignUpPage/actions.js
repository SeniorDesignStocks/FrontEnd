/*
 *
 * SignUpPage actions
 *
 */

import {
  SIGN_UP,
  SIGN_UP_FAILURE,
} from './constants';
import {
  SIGN_IN_SUCCESS,
} from 'containers/App/constants';

export const signUp = ({ username, password, email }) => ({
  type: SIGN_UP,
  username,
  password,
  email,
});

export const signUpSuccess = (userData) => ({
  type: SIGN_IN_SUCCESS,
  userData,
});

export const signUpFailure = (errors) => ({
  type: SIGN_UP_FAILURE,
  errors,
});
