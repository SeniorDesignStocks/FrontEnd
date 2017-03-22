import 'whatwg-fetch';

const requestCache = (() => {
  const cache = {};

  return {
    get: (url) => cache[url],
    push: (url) => (response) => {
      cache[url] = response;
      return response;
    },
  };
})();

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options, cache = true) {
  const cacheVal = requestCache.get(url);

  if (cacheVal === undefined) {
    let boundPush = requestCache.push(url);

    // unset the caching function if the cache is off
    if (cache === false) boundPush = (val) => val;

    return fetch(url, options)
      .then(checkStatus)
      .then(parseJSON)
      .then(boundPush);
  }

  console.log(`request skipped: ${url}`);

  return cacheVal;
}
