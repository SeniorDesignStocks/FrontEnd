import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { call, takeEvery, put, take, cancel } from 'redux-saga/effects';
import cache from 'utils/cache';
import request from 'utils/request';

import {
  plotDataLoaded,
  favoriteDataSuccess,
} from './actions';
import {
  displayError,
} from 'containers/App/actions';
import {
  REQUEST_PLOT_DATA,
} from './constants';
import {
  ADDFAVORITE_SUCCESS,
} from 'containers/App/constants';

export function* getPlotData({ stockName }) {
  const requestURL = `http://localhost:8080/api/stockData/plotData/${stockName}`;
  const cachePath = { stockName, type: 'plotData' };
  const data = cache.get(cachePath);

  if (data) {
    yield put(plotDataLoaded(stockName, data));
  } else {
    try {
      const res = yield call(request, requestURL);

      cache.set(cachePath, res.data);
      yield put(plotDataLoaded(stockName, res.data));
    } catch (err) {
      yield put(displayError(err));
    }
  }
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
