import request from 'utils/request';
import { route } from './index';

export const current = ({ stockName }) => request(
  `${route}/stockData/${stockName}/current`,
  {},
  undefined,
  true,
);

export const historic = ({ stockName }) => request(
  `${route}/stockData/${stockName}/historic`,
  {},
  undefined,
  true,
);
