const StockPage = (path, { loadModule, errorLoading, injectReducer, injectSagas }) => ({
  name: 'stock',
  getComponent(nextState, cb) {
    const importModules = Promise.all([
      System.import('containers/StockPage/reducer'),
      System.import('containers/StockPage/sagas'),
      System.import('containers/StockPage'),
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([reducer, sagas, component]) => {
      injectReducer('stockPage', reducer.default);
      injectSagas(sagas.default);

      renderRoute(component);
    });

    importModules.catch(errorLoading);
  },
  path,
});

export default StockPage;
