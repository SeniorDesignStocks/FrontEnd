import request from 'utils/request';
import { route } from './index';

export const addFavorite = ({ username, stockName }) => request(
  `${route}/account/${username}/addFavorite/${stockName}`,
  {},
  undefined,
  false,
);

export const removeFavorite = ({ username, stockName }) => request(
  `${route}/account/${username}/removeFavorite/${stockName}`,
  {},
  undefined,
  false,
);
