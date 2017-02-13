import { createSelector } from 'reselect';

/**
 * Direct selector to the favoriteList state domain
 */
const selectFavoriteListDomain = () => (state) => state.get('favoriteList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FavoriteList
 */

const selectFavoriteList = () => createSelector(
  selectFavoriteListDomain(),
  (substate) => substate.toJS()
);

export default selectFavoriteList;
export {
  selectFavoriteListDomain,
};
