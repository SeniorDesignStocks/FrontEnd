/*
 *
 * FavoriteList actions
 *
 */

import {
  REQUEST_PLOT_DATA,
  LOADED_PLOT_DATA,
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
