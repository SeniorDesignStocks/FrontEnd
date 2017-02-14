/*
 *
 * FavoriteList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_FAVORITE,
  LOAD_FAVORITES,
} from './constants';

const initialState = fromJS({
  favorites: [{
    name: 'AAPL',
    favorited: false,
    stockData: {
      value: 300,
      up: true,
    },
    plotData: false,
  }],
});

function favoriteListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FAVORITES:
      return state
        .set('favorites', action.favorites);

    case ADD_FAVORITE:
      return state
        .get('favorites').push(action.newFavorite);

    default:
      return state;
  }
}

export default favoriteListReducer;
