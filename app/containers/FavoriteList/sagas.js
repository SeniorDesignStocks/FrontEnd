import { delay } from 'redux-saga';
import {
  plotDataLoaded,
  unfavoriteSuccess,
} from './actions';
import { takeEvery, put } from 'redux-saga/effects';

import {
  REQUEST_PLOT_DATA,
  UNFAVORITE,
} from './constants';

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

export function* putUnfavorite({ stockName }) {
  yield put(unfavoriteSuccess(stockName));
}

export function* plotData() {
  yield takeEvery(REQUEST_PLOT_DATA, getPlotData);
}

export function* unfavorite() {
  yield takeEvery(UNFAVORITE, putUnfavorite);
}
// All sagas to be loaded
export default [
  plotData,
  unfavorite,
];
