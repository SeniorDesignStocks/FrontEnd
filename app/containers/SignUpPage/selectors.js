import { createSelector } from 'reselect';

/**
 * Direct selector to the signUpPage state domain
 */
const selectSignUpPageDomain = () => (state) => state.get('signUpPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignUpPage
 */

const selectSignUpPage = () => createSelector(
  selectSignUpPageDomain(),
  (substate) => substate.toJS()
);

export default selectSignUpPage;
export {
  selectSignUpPageDomain,
};
