import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { REQUEST_SEARCH_RESULTS } from './constants';
import { searchResultsSuccess } from './actions';
import { displayError } from 'containers/App/actions';

export function* getSearchResults({ searchTerm }) {
  if (searchTerm === '') {
    yield put(searchResultsSuccess([], ''));
  } else {
    const requestURL = `http://localhost:8080/api/search/results/${searchTerm}`;

    try {
      const res = yield call(request, requestURL);

      yield put(searchResultsSuccess(res.data, searchTerm));
    } catch (err) {
      yield put(displayError(err));
    }
  }
}

export function* searchResults() {
  yield takeLatest(REQUEST_SEARCH_RESULTS, getSearchResults);
}

// All sagas to be loaded
export default [
  searchResults,
];
