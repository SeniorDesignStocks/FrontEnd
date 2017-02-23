/*
 *
 * FavoriteList actions
 *
 */

import {
  REQUEST_PLOT_DATA,
  PLOT_DATA_SUCCESS,
  FAVORITE_DATA_SUCCESS,
} from './constants';

export const requestPlotData = (stockName) => ({
  type: REQUEST_PLOT_DATA,
  stockName,
});

export const plotDataLoaded = (stockName, plotData) => ({
  type: PLOT_DATA_SUCCESS,
  stockName,
  plotData,
});

export const favoriteDataSuccess = (data) => ({
  type: FAVORITE_DATA_SUCCESS,
  data,
});
