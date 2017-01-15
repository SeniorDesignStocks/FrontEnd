/*
 *
 * SearchBar actions
 *
 */

import {
  CHANGE_SEARCH_TERM,
} from './constants';

export function changeSeachTerm(newSearchTerm) {
  // compute new search results
  let testData = ['GOOG', 'AAPL', 'NEXT', 'AASS'];
  if (newSearchTerm.trim().length === 0) {
    testData = [];
  }

  return {
    type: CHANGE_SEARCH_TERM,
    newSearchTerm,
    newSearchResults: testData.filter((stock) => stock.indexOf(newSearchTerm.toUpperCase()) !== -1),
  };
}
