/*
 *
 * SearchBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SEARCH_TERM,
  CHANGE_SELECT_INDEX,
} from './constants';

const initialState = fromJS({
  searchTerm: '',
  searchResults: fromJS([]),
  selectIndex: 0,
});

function searchBarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return state
      .set('searchTerm', action.newSearchTerm)
      .set('searchResults', fromJS(action.newSearchResults))
      .set('selectIndex', 0);

    case CHANGE_SELECT_INDEX:
      return state.set('selectIndex', action.newIndex);

    default:
      return state;
  }
}

export default searchBarReducer;
