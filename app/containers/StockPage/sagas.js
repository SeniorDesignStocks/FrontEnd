import { takeLatest, put, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  REQUEST_PLOT_DATA,
  REQUEST_NEWS,
  REQUEST_PREDICTIONS,
  REQUEST_STOCK_DATA,
} from './constants';

import {
  plotDataSuccess,
  predictionsSuccess,
  newsSuccess,
  stockDataSuccess,
} from './actions';

export function* loadPlotData() {
  yield put(plotDataSuccess([
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ]));
}

export function* loadPredictions() {
  yield put(predictionsSuccess({}));
}

export function* loadNews() {
  // lets create some fake news O.o
  yield put(newsSuccess([{
    title: 'OMG this litterally just happened',
    source: 'The Wall Street Journal',
    link: 'https://www.wsj.com/',
    disc: 'Welp, that was a thing.',
  }, {
    title: 'OMG this litterally just happened',
    source: 'The Wall Street Journal',
    link: 'https://www.wsj.com/',
    disc: 'Welp, that was a thing.',
  }, {
    title: 'OMG this litterally just happened',
    source: 'The Wall Street Journal',
    link: 'https://www.wsj.com/',
    disc: 'Welp, that was a thing.',
  }, {
    title: 'OMG this litterally just happened',
    source: 'The Wall Street Journal',
    link: 'https://www.wsj.com/',
    disc: 'Welp, that was a thing.',
  }, {
    title: 'OMG this litterally just happened',
    source: 'The Wall Street Journal',
    link: 'https://www.wsj.com/',
    disc: 'Welp, that was a thing.',
  }]));
}

export function* loadStockData() {
  yield put(stockDataSuccess({ value: 300 }));
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
