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
} from './constants';

const initialState = fromJS([{
  name: 'AAPL',
  favorited: false,
  stockData: {
    value: 300,
    up: true,
  },
  plotData: false,
}, {
  name: 'AASS',
  favorited: false,
  stockData: {
    value: 450,
    up: false,
  },
  plotData: false,
}, {
  name: 'GOOG',
  favorited: false,
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

    default:
      return state;
  }
}

export default favoriteListReducer;
