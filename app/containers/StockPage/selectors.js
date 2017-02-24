import { createSelector } from 'reselect';

/**
 * Direct selector to the stockPage state domain
 */
const selectStockPageDomain = () => (state) => state.get('stockPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StockPage
 */

const selectStockPage = () => createSelector(
  selectStockPageDomain(),
  (substate) => substate.toJS()
);

export default selectStockPage;
export {
  selectStockPageDomain,
};
