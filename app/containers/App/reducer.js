import { fromJS } from 'immutable';
import {
  DISPLAY_ERROR,
  REMOVE_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
  UNFAVORITE_SUCCESS,
  ADDFAVORITE_SUCCESS,
} from './constants';

const initialState = fromJS({
  userData: false,
  error: '',
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
    case SIGN_IN_SUCCESS:
      return state
        .set('userData', fromJS(action.userData));
    case SIGN_IN_FAILURE:
      return state
        .set('error', action.message);

    case SIGN_OUT:
      return state
        .set('userData', false);

    case UNFAVORITE_SUCCESS:
      return state
        .setIn(['userData', 'favorites'],
          state
            .getIn(['userData', 'favorites'])
            .filter((item) => item !== action.stockName)
        );

    case ADDFAVORITE_SUCCESS:
      return state
        .setIn(['userData', 'favorites'],
          state
            .getIn(['userData', 'favorites'])
            .push(action.stockName)
      );

    default:
      return state;
  }
}

export default appReducer;
