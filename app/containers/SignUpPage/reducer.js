/*
 *
 * SignUpPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_UP_FAILURE,
} from './constants';

// used to handle the error messages
const initialState = fromJS({
  errors: {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  },
});

function signUpPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_FAILURE:
      console.log(action.errors);
      return state.set('errors', fromJS(action.errors));

    default:
      return state;
  }
}

export default signUpPageReducer;
