/*
 *
 * StockPage actions
 *
 */

import {
  REQUEST_PLOT_DATA,
  REQUEST_PREDICTIONS,
  REQUEST_NEWS,
  REQUEST_STOCK_DATA,

  PLOT_DATA_SUCCESS,
  PREDICTIONS_SUCCESS,
  NEWS_SUCCESS,
  STOCK_DATA_SUCCESS,

  PLOT_DATA_FAILURE,
  PREDICTIONS_FAILURE,
  NEWS_FAILURE,
  STOCK_DATA_FAILURE,
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

export const requestStockData = (stockName) => ({
  type: REQUEST_STOCK_DATA,
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

export const stockDataSuccess = (stockData) => ({
  type: STOCK_DATA_SUCCESS,
  stockData,
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

export const stockDataFailure = (stockData) => ({
  type: STOCK_DATA_FAILURE,
  stockData,
});
