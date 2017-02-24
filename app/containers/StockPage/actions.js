/*
 *
 * StockPage actions
 *
 */

import {
  REQUEST_PLOT_DATA,
  REQUEST_PREDICTIONS,
  REQUEST_NEWS,

  PLOT_DATA_SUCCESS,
  PREDICTIONS_SUCCESS,
  NEWS_SUCCESS,
} from './constants';

export const loadPlotData = (stockName) => ({
  type: REQUEST_PLOT_DATA,
  stockName,
});

export const loadPredictions = (stockName) => ({
  type: REQUEST_PREDICTIONS,
  stockName,
});

export const loadNews = (stockName) => ({
  type: REQUEST_NEWS,
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
