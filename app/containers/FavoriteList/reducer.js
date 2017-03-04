/*
 *
 * FavoriteList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PLOT_DATA_SUCCESS,
  CUR_VALUES_SUCCESS,
} from './constants';
import {
  ADDFAVORITE_SUCCESS,
  UNFAVORITE_SUCCESS,
} from 'containers/App/constants';

const initialState = fromJS([{
  name: 'AAPL',
  curValues: false,
  plotData: false,
}, {
  name: 'AASS',
  curValues: false,
  plotData: false,
}, {
  name: 'GOOG',
  curValues: false,
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

    case CUR_VALUES_SUCCESS:
      console.log(action);
      return state
        .update(
          state.findIndex((item) => item.get('name') === action.stockName),
          (item) => item.set('curValues', action.curValues)
        );

    case ADDFAVORITE_SUCCESS:
      return state.push(fromJS({
        name: action.stockName,
        stockData: false,
        plotData: false,
      }));

    case UNFAVORITE_SUCCESS:
      return state
        .filter((item) => item.get('name') !== action.stockName);

    default:
      return state;
  }
}

export default favoriteListReducer;
