/*
 *
 * FavoriteList actions
 *
 */

import {
  REQUEST_PLOT_DATA,
  PLOT_DATA_SUCCESS,
  FAVORITE_DATA_SUCCESS,
  REQUEST_CUR_VALUES,
  CUR_VALUES_SUCCESS,
  REQUEST_FAVORITES_DATA,
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

export const requestCurValues = (stockName) => ({
  type: REQUEST_CUR_VALUES,
  stockName,
});

export const curValuesLoaded = (stockName, curValues) => ({
  type: CUR_VALUES_SUCCESS,
  stockName,
  curValues,
});

export const requestFavoritesData = (favorites) => ({
  type: REQUEST_FAVORITES_DATA,
  favorites,
});
