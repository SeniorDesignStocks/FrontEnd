/*
 *
 * SearchBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SELECT_INDEX,
  SEARCH_RESULTS_SUCCESS,
} from './constants';

const initialState = fromJS({
  searchTerm: '',
  searchResults: [],
  selectIndex: 0,
});

function searchBarReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULTS_SUCCESS:
      return state
        .set('searchResults', fromJS(action.data))
        .set('searchTerm', action.searchTerm);

    case CHANGE_SELECT_INDEX:
      return state.set('selectIndex', action.newIndex);

    default:
      return state;
  }
}

export default searchBarReducer;
