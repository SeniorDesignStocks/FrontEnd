const StockPage = (path, { loadModule, errorLoading, injectSagas, injectReducer }) => ({
  name: 'signUp',
  getComponent(nextState, cb) {
    const importModules = Promise.all([
      System.import('containers/SignUpPage/reducer'),
      System.import('containers/SignUpPage/sagas'),
      System.import('containers/SignUpPage'),
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([reducer, sagas, component]) => {
      injectReducer('signUpPage', reducer.default);
      injectSagas(sagas.default);

      renderRoute(component);
    });

    importModules.catch(errorLoading);
  },
  path,
});

export default StockPage;
