import { createSelector } from 'reselect';

/**
 * Direct selector to the searchBar state domain
 */
const selectSearchBarDomain = () => (state) => state.get('searchBar');

const selectSearchTerm = () => createSelector(
  selectSearchBarDomain(),
  (state) => state.get('searchTerm')
);

const selectSearchResults = () => createSelector(
  selectSearchBarDomain(),
  (state) => state.get('searchResults').toJS()
);

export {
  selectSearchTerm,
  selectSearchResults,
};
