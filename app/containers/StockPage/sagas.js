import { call, takeLatest, put, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { historic, current } from 'api/stockData';

import {
  REQUEST_PLOT_DATA,
  REQUEST_NEWS,
  REQUEST_PREDICTIONS,
  REQUEST_CUR_VALUES,
} from './constants';

import {
  plotDataSuccess,
  plotDataFailure,

  newsSuccess,
  newsFailure,

  predictionsSuccess,

  curValuesSuccess,
  curValuesFailure,
} from './actions';

export function* loadPlotData({ stockName }) {
  try {
    const res = yield call(historic, { stockName });

    yield put(plotDataSuccess(res));
  } catch (err) {
    yield put(plotDataFailure(err));
  }
}

export function* loadPredictions() {
  yield put(predictionsSuccess({}));
}

export function* loadNews() {
  const requestURL = 'http://localhost:8080/api/news/current';

  try {
    const res = yield call(request, requestURL);

    yield put(newsSuccess(res.data));
  } catch (err) {
    yield put(newsFailure(err));
  }
}

export function* loadCurValues({ stockName }) {
  try {
    const res = yield call(current, { stockName });

    yield put(curValuesSuccess(res));
  } catch (err) {
    yield put(curValuesFailure(err));
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

export function* curValues() {
  const watcher = yield takeLatest(REQUEST_CUR_VALUES, loadCurValues);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export default [
  plotData,
  predictions,
  news,
  curValues,
];
