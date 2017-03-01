/*
 *
 * SearchBar actions
 *
 */

import {
  CHANGE_SEARCH_TERM,
  CHANGE_SELECT_INDEX,
} from './constants';

export function changeSeachTerm(newSearchTerm) {
  // compute new search results
  let testData = ['GOOG', 'AAPL', 'NEXT', 'AASS', 'AXXA'];
  if (newSearchTerm.trim().length === 0) {
    testData = [];
  }

  return {
    type: CHANGE_SEARCH_TERM,
    newSearchTerm,
    newSearchResults: testData.filter((stock) => stock.indexOf(newSearchTerm.toUpperCase()) !== -1),
  };
}

export const changeSelectIndex = (newIndex) => ({
  type: CHANGE_SELECT_INDEX,
  newIndex,
});
