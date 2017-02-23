import { createSelector } from 'reselect';

/**
 * Direct selector to the favoriteList state domain
 */
const selectFavoriteListDomain = () => (state) => state.get('favoriteList');

/**
 * Default selector used by FavoriteList
 */

const selectFavoriteList = () => createSelector(
  selectFavoriteListDomain(),
  (substate) => substate.toJS()
);

export default selectFavoriteList;
