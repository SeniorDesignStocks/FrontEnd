import { takeLatest, call, put } from 'redux-saga/effects';
import { termSearch } from 'api/search';
import { REQUEST_SEARCH_RESULTS } from './constants';
import { searchResultsSuccess } from './actions';
import { displayError } from 'containers/App/actions';

export function* getSearchResults({ searchTerm }) {
  if (searchTerm === '') {
    yield put(searchResultsSuccess([], ''));
  } else {
    try {
      const res = yield call(termSearch, { term: searchTerm });

      yield put(searchResultsSuccess(res, searchTerm));
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
