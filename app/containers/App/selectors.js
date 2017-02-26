import { createSelector } from 'reselect';

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectGlobalDomain = () => (state) => state.get('global');

const selectUserData = () => createSelector(
  selectGlobalDomain(),
  (state) => {
    const userData = state.get('userData');
    if (userData === false) {
      return userData;
    }

    return userData.toJS();
  }
);

const selectFavorites = () => createSelector(
  selectUserData(),
  (state) => {
    if (state === false) {
      return false;
    }

    return state.favorites;
  }
);

const selectErrorMessage = () => createSelector(
  selectGlobalDomain(),
  (state) => state.get('error'),
);

export {
  selectLocationState,
  selectUserData,
  selectFavorites,
  selectErrorMessage,
};
