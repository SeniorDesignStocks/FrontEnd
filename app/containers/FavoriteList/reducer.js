/*
 *
 * FavoriteList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_FAVORITE,
  LOAD_FAVORITES,
  LOADED_PLOT_DATA,
  UNFAVORITE_SUCCESS,
} from './constants';

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
    case LOAD_FAVORITES:
      return state
        .set('favorites', action.favorites);

    case ADD_FAVORITE:
      return state
        .get('favorites').push(action.newFavorite);

    case LOADED_PLOT_DATA:
      return state
        .update(
          state.findIndex((item) => item.get('name') === action.stockName),
          (item) => item.set('plotData', action.plotData)
        );

    case UNFAVORITE_SUCCESS:
      return state
        .filter((item) => item.get('name') !== action.stockName);

    default:
      return state;
  }
}

export default favoriteListReducer;
