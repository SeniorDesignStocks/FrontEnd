import { fromJS } from 'immutable';
import {
  DISPLAY_ERROR,
  REMOVE_ERROR,
  SIGN_IN,
  SIGN_OUT,
} from './constants';

const initialState = fromJS({
  userData: false,
  error: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {

    // handlers for global error messages
    case DISPLAY_ERROR:
      return state
        .set('error', action.message);
    case REMOVE_ERROR:
      return state
        .set('error', false);

    // handlers for user signing
    case SIGN_IN:
      return state
        .set('userData', fromJS(action.userData));
    case SIGN_OUT:
      return state
        .set('userData', false);

    default:
      return state;
  }
}

export default appReducer;
