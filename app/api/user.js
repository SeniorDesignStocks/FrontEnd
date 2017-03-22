import request from 'utils/request';

export const login = (options) => request(
  'http://stockssimplified.ddns.net:4567/user/login',
  options,
  false,
);

export const logout = (options) => request(
  'http://stockssimplified.ddns.net:4567/user/logout',
  options,
  false,
);

export const register = (options) => request(
  'http://stockssimplified.ddns.net:4567/user/register',
  options,
  false,
);
