/*
 *
 * FavoriteList actions
 *
 */

import {
  REQUEST_PLOT_DATA,
  LOADED_PLOT_DATA,
  UNFAVORITE,
} from './constants';

export const requestPlotData = (stockName) => ({
  type: REQUEST_PLOT_DATA,
  stockName,
});

export const plotDataLoaded = (stockName, plotData) => ({
  type: LOADED_PLOT_DATA,
  stockName,
  plotData,
});

export const unfavorite = (stockName) => ({
  type: UNFAVORITE,
  stockName,
});
