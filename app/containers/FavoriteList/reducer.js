/*
 *
 * FavoriteList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PLOT_DATA_SUCCESS,
  FAVORITE_DATA_SUCCESS,
} from './constants';
import {
  UNFAVORITE_SUCCESS,
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

    case PLOT_DATA_SUCCESS:
      return state
        .update(
          state.findIndex((item) => item.get('name') === action.stockName),
          (item) => item.set('plotData', action.plotData)
        );

    case FAVORITE_DATA_SUCCESS:
      return state.push(action.data);

    case UNFAVORITE_SUCCESS:
      return state
        .filter((item) => item.get('name') !== action.stockName);

    default:
      return state;
  }
}

export default favoriteListReducer;
