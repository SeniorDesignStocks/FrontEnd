import request from 'utils/request';
import { route } from './index';

export const predict = ({ stockName }) => request(
  `${route}/predict/stock/${stockName}`,
  {},
  undefined,
  true,
);

export const predictstocks = ({ stocks }) => request(
  `${route}/predict/stocks?stocks=${stocks.join(',')}`,
  {},
  undefined,
  true,
);
