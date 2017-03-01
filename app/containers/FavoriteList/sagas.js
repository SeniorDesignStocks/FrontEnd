import { delay } from 'redux-saga';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery, put, take, cancel } from 'redux-saga/effects';

import {
  plotDataLoaded,
  favoriteDataSuccess,
} from './actions';
import {
  REQUEST_PLOT_DATA,
} from './constants';
import {
  ADDFAVORITE_SUCCESS,
} from 'containers/App/constants';

export function* getPlotData({ stockName }) {
  yield delay(2000);
  yield put(plotDataLoaded(stockName, [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ]));
}

export function* getFavoriteData({ stockName }) {
  yield put(favoriteDataSuccess(fromJS({
    name: stockName,
    stockData: {
      value: 300,
      up: true,
    },
    plotData: false,
  })));
}

export function* plotData() {
  const watcher = yield takeEvery(REQUEST_PLOT_DATA, getPlotData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* loadFavoriteData() {
  const watcher = yield takeEvery(ADDFAVORITE_SUCCESS, getFavoriteData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  plotData,
  loadFavoriteData,
];
