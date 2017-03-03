/*
 *
 * StockPage constants
 *
 */

const route = (name) => `app/StockPage/${name}`;

export const REQUEST_PLOT_DATA = route('REQUEST_PLOT_DATA');
export const PLOT_DATA_SUCCESS = route('PLOT_DATA_SUCCESS');
export const PLOT_DATA_FAILURE = route('PLOT_DATA_FAILURE');

export const REQUEST_NEWS = route('REQUEST_NEWS');
export const NEWS_SUCCESS = route('NEWS_SUCCESS');
export const NEWS_FAILURE = route('NEWS_FAILURE');

export const REQUEST_PREDICTIONS = route('REQUEST_PREDICTIONS');
export const PREDICTIONS_SUCCESS = route('PREDICTIONS_SUCCESS');
export const PREDICTIONS_FAILURE = route('PREDICTIONS_FAILURE');

export const REQUEST_CUR_VALUES = route('REQUEST_CUR_VALUES');
export const CUR_VALUES_SUCCESS = route('CUR_VALUES_SUCCESS');
export const CUR_VALUES_FAILURE = route('CUR_VALUES_FAILURE');
