import { takeEvery, put } from 'redux-saga/effects';
import {
  unfavoriteSuccess,
  addFavoriteSuccess,
} from './actions';
import {
  UNFAVORITE,
  ADDFAVORITE,
} from './constants';

export function* putUnfavorite({ stockName }) {
  yield put(unfavoriteSuccess(stockName));
}
export function* putAddFavorite({ stockName }) {
  yield put(addFavoriteSuccess(stockName));
}

export function* addFavorite() {
  yield takeEvery(ADDFAVORITE, putAddFavorite);
}
export function* unfavorite() {
  yield takeEvery(UNFAVORITE, putUnfavorite);
}

export default [
  addFavorite,
  unfavorite,
];
