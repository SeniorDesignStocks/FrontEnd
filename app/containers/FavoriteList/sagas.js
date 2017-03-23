import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { call, takeEvery, put, take, cancel } from 'redux-saga/effects';
import { historic, current } from 'api/stockData';
import { predict } from 'api/predictions';

import {
  plotDataLoaded,
  favoriteDataSuccess,
  curValuesLoaded,
  predictionsSuccess,
} from './actions';
import {
  displayError,
} from 'containers/App/actions';

import {
  REQUEST_PLOT_DATA,
  REQUEST_CUR_VALUES,
  REQUEST_PREDICTIONS,
} from './constants';
import {
  ADDFAVORITE_SUCCESS,
} from 'containers/App/constants';

export function* getPlotData({ stockName }) {
  try {
    const res = yield call(historic, { stockName });

    yield put(plotDataLoaded(stockName, res));
  } catch (err) {
    yield put(displayError(err));
  }
}

export function* getFavoriteData({ stockName }) {
  yield put(favoriteDataSuccess(fromJS({
    name: stockName,
    stockData: false,
    plotData: false,
    predictions: false,
  })));
}

export function* getCurValues({ stockName }) {
  try {
    const res = yield call(current, { stockName });

    yield put(curValuesLoaded(stockName, res));
  } catch (err) {
    yield put(displayError(err));
  }
}

export function* getPredictions({ stockName }) {
  try {
    const res = yield call(predict, { stockName });
    console.log(res);

    yield put(predictionsSuccess(stockName, res));
  } catch (err) {
    yield put(displayError(err));
  }
}

export function* plotData() {
  const watcher = yield takeEvery(REQUEST_PLOT_DATA, getPlotData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* favoriteData() {
  const watcher = yield takeEvery(ADDFAVORITE_SUCCESS, getFavoriteData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* curValues() {
  const watcher = yield takeEvery(REQUEST_CUR_VALUES, getCurValues);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* predictions() {
  const watcher = yield takeEvery(REQUEST_PREDICTIONS, getPredictions);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  plotData,
  favoriteData,
  curValues,
  predictions,
];
