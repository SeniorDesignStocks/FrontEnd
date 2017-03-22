import request from 'utils/request';

export const addFavorite = ({ username, stockName }) => request(
  `http://localhost:8080/account/${username}/addFavorite/${stockName}`,
  {},
  undefined,
  false,
);

export const removeFavorite = ({ username, stockName }) => request(
  `http://localhost:8080/account/${username}/removeFavorite/${stockName}`,
  {},
  undefined,
  false,
);
