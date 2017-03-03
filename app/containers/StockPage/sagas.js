import { call, takeLatest, put, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import cache from 'utils/cache';
import request from 'utils/request';

import {
  REQUEST_PLOT_DATA,
  REQUEST_NEWS,
  REQUEST_PREDICTIONS,
  REQUEST_STOCK_DATA,
} from './constants';

import {
  plotDataSuccess,
  plotDataFailure,

  newsSuccess,
  newsFailure,

  predictionsSuccess,

  stockDataSuccess,
  stockDataFailure,
} from './actions';

export function* loadPlotData({ stockName }) {
  const requestURL = `http://localhost:8080/api/stockData/plotData/${stockName}`;
  const cachePath = { stockName, type: 'plotData' };
  const data = cache.get(cachePath);

  if (data) {
    yield put(plotDataSuccess(data));
  } else {
    try {
      const res = yield call(request, requestURL);

      cache.set(cachePath, res.data);
      yield put(plotDataSuccess(res.data));
    } catch (err) {
      yield put(plotDataFailure(err));
    }
  }
}

export function* loadPredictions() {
  yield put(predictionsSuccess({}));
}

export function* loadNews() {
  const requestURL = 'http://localhost:8080/api/news/current';

  // lets create some fake news O.o
  try {
    const res = yield call(request, requestURL);

    yield put(newsSuccess(res.data));
  } catch (err) {
    yield put(newsFailure(err));
  }
}

export function* loadStockData({ stockName }) {
  const requestURL = `http://localhost:8080/api/stockData/general/${stockName}`;

  try {
    const res = yield call(request, requestURL);

    yield put(stockDataSuccess(res.data));
  } catch (err) {
    yield put(stockDataFailure(err));
  }
}

export function* plotData() {
  const watcher = yield takeLatest(REQUEST_PLOT_DATA, loadPlotData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* news() {
  const watcher = yield takeLatest(REQUEST_NEWS, loadNews);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* predictions() {
  const watcher = yield takeLatest(REQUEST_PREDICTIONS, loadPredictions);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* stockData() {
  const watcher = yield takeLatest(REQUEST_STOCK_DATA, loadStockData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export default [
  plotData,
  predictions,
  news,
  stockData,
];
