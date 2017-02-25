import { createSelector } from 'reselect';

/**
 * Direct selector to the stockPage state domain
 */
const selectStockPageDomain = () => (state) => state.get('stockPage');

const selectStockPage = () => createSelector(
  selectStockPageDomain(),
  (substate) => substate.toJS()
);

export default selectStockPage;
export {
  selectStockPageDomain,
};
