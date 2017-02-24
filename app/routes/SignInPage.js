const StockPage = (path, { loadModule, errorLoading }) => ({
  name: 'signIn',
  getComponent(nextState, cb) {
    System.import('containers/SignInPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
  path,
});

export default StockPage;
