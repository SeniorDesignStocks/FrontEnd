/*
 *
 * SearchBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SEARCH_TERM,
} from './constants';

const initialState = fromJS({
  searchTerm: '',
  searchResults: fromJS([]),
});

function searchBarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return state
      .set('searchTerm', action.newSearchTerm)
      .set('searchResults', fromJS(action.newSearchResults));
    default:
      return state;
  }
}

export default searchBarReducer;
