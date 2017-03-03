/*
 *
 * StockPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PLOT_DATA_SUCCESS,
  NEWS_SUCCESS,
  PREDICTIONS_SUCCESS,
  CUR_VALUES_SUCCESS,
} from './constants';

const initialState = fromJS({
  plotData: false,
  news: false,
  predictions: false,
  curValues: false,
});

function stockPageReducer(state = initialState, action) {
  switch (action.type) {
    case PLOT_DATA_SUCCESS:
      return state.set('plotData', action.plotData);

    case NEWS_SUCCESS:
      return state.set('news', action.news);

    case PREDICTIONS_SUCCESS:
      return state.set('predictions', action.predictions);

    case CUR_VALUES_SUCCESS:
      return state.set('curValues', action.curValues);

    default:
      return state;
  }
}

export default stockPageReducer;
