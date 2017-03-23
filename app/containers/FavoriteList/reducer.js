/*
 *
 * FavoriteList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PLOT_DATA_SUCCESS,
  CUR_VALUES_SUCCESS,
  REQUEST_FAVORITES_DATA,
  PREDICTIONS_SUCCESS,
} from './constants';
import {
  ADDFAVORITE_SUCCESS,
  UNFAVORITE_SUCCESS,
} from 'containers/App/constants';

const initialState = fromJS([]);

function favoriteListReducer(state = initialState, action) {
  switch (action.type) {

    case PLOT_DATA_SUCCESS:
      return state
        .update(
          state.findIndex((item) => item.get('name') === action.stockName),
          (item) => item.set('plotData', action.plotData)
        );

    case CUR_VALUES_SUCCESS:
      return state
        .update(
          state.findIndex((item) => item.get('name') === action.stockName),
          (item) => item.set('curValues', action.curValues)
        );

    case PREDICTIONS_SUCCESS:
      console.log('here');
      return state
        .update(
          state.findIndex((item) => item.get('name') === action.stockName),
          (item) => item.set('predictions', action.predictions),
        );

    case ADDFAVORITE_SUCCESS:
      return state.push(fromJS({
        name: action.stockName,
        curValues: false,
        plotData: false,
        predictions: false,
      }));

    case UNFAVORITE_SUCCESS:
      return state
        .filter((item) => item.get('name') !== action.stockName);

    case REQUEST_FAVORITES_DATA:
      return fromJS(action.favorites.map((stockName) => ({
        name: stockName,
        curValues: false,
        plotData: false,
        predictions: false,
      })));

    default:
      return state;
  }
}

export default favoriteListReducer;
