function createCache(initCache = {}) {
  const cache = initCache;

  return {
    get: ({ stockName, type }) => cache && cache[stockName] && cache[stockName][type],
    set: ({ stockName, type }, value) => {
      if (!cache[stockName]) {
        cache[stockName] = {};
      }

      cache[stockName][type] = value;
    },
  };
}

export default createCache();
