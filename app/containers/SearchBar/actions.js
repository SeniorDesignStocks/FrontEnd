/*
 *
 * SearchBar actions
 *
 */

import {
  CHANGE_SELECT_INDEX,
  REQUEST_SEARCH_RESULTS,
  SEARCH_RESULTS_SUCCESS,
} from './constants';

export const changeSeachTerm = (newSearchTerm) => ({
  type: REQUEST_SEARCH_RESULTS,
  searchTerm: newSearchTerm.trim(),
});

export const searchResultsSuccess = (data, searchTerm) => ({
  type: SEARCH_RESULTS_SUCCESS,
  data,
  searchTerm,
});

export const changeSelectIndex = (newIndex) => ({
  type: CHANGE_SELECT_INDEX,
  newIndex,
});
