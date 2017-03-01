import { call, takeLatest, put, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
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

export function* loadPlotData() {
  const requestURL = 'http://localhost:8080/api/stockData/plotData';

  try {
    const res = yield call(request, requestURL);

    yield put(plotDataSuccess(res.plotData));
  } catch (err) {
    yield put(plotDataFailure(err));
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

export function* loadStockData() {
  const requestURL = 'http://localhost:8080/api/stockData/general';

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
