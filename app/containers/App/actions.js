import {
  DISPLAY_ERROR,
  REMOVE_ERROR,
  SIGN_IN,
  SIGN_OUT,
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
