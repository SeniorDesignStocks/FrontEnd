const Home = (path, { loadModule, errorLoading, injectReducer, injectSagas }) => ({
  name: 'home',
  getComponent(nextState, cb) {
    const importModules = Promise.all([
      System.import('containers/SearchBar/reducer'),
      System.import('containers/FavoriteList/reducer'),
      System.import('containers/FavoriteList/sagas'),
      System.import('containers/HomePage'),
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([reducerSearchBar, reducerFavoriteList, sagas, component]) => {
      injectReducer('searchBar', reducerSearchBar.default);
      injectReducer('favoriteList', reducerFavoriteList.default);
      injectSagas(sagas.default);

      renderRoute(component);
    });

    importModules.catch(errorLoading);
  },
  path,
});

export default Home;
