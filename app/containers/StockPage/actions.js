/*
 *
 * StockPage actions
 *
 */

import {
  REQUEST_PLOT_DATA,
  REQUEST_PREDICTIONS,
  REQUEST_NEWS,
  REQUEST_CUR_VALUES,

  PLOT_DATA_SUCCESS,
  PREDICTIONS_SUCCESS,
  NEWS_SUCCESS,
  CUR_VALUES_SUCCESS,

  PLOT_DATA_FAILURE,
  PREDICTIONS_FAILURE,
  NEWS_FAILURE,
  CUR_VALUES_FAILURE,
} from './constants';

export const requestPlotData = (stockName) => ({
  type: REQUEST_PLOT_DATA,
  stockName,
});

export const requestPredictions = (stockName) => ({
  type: REQUEST_PREDICTIONS,
  stockName,
});

export const requestNews = (stockName) => ({
  type: REQUEST_NEWS,
  stockName,
});

export const requestCurValues = (stockName) => ({
  type: REQUEST_CUR_VALUES,
  stockName,
});

export const plotDataSuccess = (plotData) => ({
  type: PLOT_DATA_SUCCESS,
  plotData,
});

export const predictionsSuccess = (predictions) => ({
  type: PREDICTIONS_SUCCESS,
  predictions,
});

export const newsSuccess = (news) => ({
  type: NEWS_SUCCESS,
  news,
});

export const curValuesSuccess = (curValues) => ({
  type: CUR_VALUES_SUCCESS,
  curValues,
});

export const plotDataFailure = (plotData) => ({
  type: PLOT_DATA_FAILURE,
  plotData,
});

export const predictionsFailure = (predictions) => ({
  type: PREDICTIONS_FAILURE,
  predictions,
});

export const newsFailure = (news) => ({
  type: NEWS_FAILURE,
  news,
});

export const curValuesFailure = (curValues) => ({
  type: CUR_VALUES_FAILURE,
  curValues,
});
