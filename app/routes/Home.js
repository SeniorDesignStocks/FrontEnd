const Home = (path, { loadModule, errorLoading, injectReducer, injectSagas }) => ({
  name: 'home',
  getComponent(nextState, cb) {
    const importModules = Promise.all([
      System.import('containers/FavoriteList/reducer'),
      System.import('containers/FavoriteList/sagas'),
      System.import('containers/HomePage'),
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([reducer, sagas, component]) => {
      injectReducer('favoriteList', reducer.default);
      injectSagas(sagas.default);

      renderRoute(component);
    });

    importModules.catch(errorLoading);
  },
  path,
});

export default Home;
