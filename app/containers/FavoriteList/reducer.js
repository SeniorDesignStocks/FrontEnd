/*
 *
 * FavoriteList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOADED_PLOT_DATA,
} from './constants';
import {
  UNFAVORITE_SUCCESS,
  ADDFAVORITE_SUCCESS,
} from 'containers/App/constants';

const initialState = fromJS([{
  name: 'AAPL',
  favorited: true,
  stockData: {
    value: 300,
    up: true,
  },
  plotData: false,
}, {
  name: 'AASS',
  favorited: true,
  stockData: {
    value: 450,
    up: false,
  },
  plotData: false,
}, {
  name: 'GOOG',
  favorited: true,
  stockData: {
    value: 300,
    up: true,
  },
  plotData: false,
}]);

function favoriteListReducer(state = initialState, action) {
  switch (action.type) {

    case LOADED_PLOT_DATA:
      return state
        .update(
          state.findIndex((item) => item.get('name') === action.stockName),
          (item) => item.set('plotData', action.plotData)
        );

    case UNFAVORITE_SUCCESS:
      return state
        .filter((item) => item.get('name') !== action.stockName);

    case ADDFAVORITE_SUCCESS:
      return state
        .push(fromJS({
          name: action.stockName,
          favorited: true,
          stockData: {
            value: 300,
            up: true,
          },
          plotData: false,
        }));

    default:
      return state;
  }
}

export default favoriteListReducer;
