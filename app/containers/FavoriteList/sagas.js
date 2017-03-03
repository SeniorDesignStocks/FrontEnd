import { delay } from 'redux-saga';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { call, takeEvery, put, take, cancel } from 'redux-saga/effects';
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

  try {
    const res = yield call(request, requestURL);

    if (res.data.length > 0) {
      yield put(plotDataLoaded(stockName, res.data));
    } else {
      yield put(displayError({ message: `Could not load plot data for ${stockName}` }));
    }
  } catch (err) {
    yield put(displayError(err));
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
