import request from 'utils/request';

export const login = (options) => request(
  'http://localhost:8080/user/login',
  options,
  undefined,
  false,
);

export const logout = (options) => request(
  'http://localhost:8080/user/logout',
  options,
  undefined,
  false,
);

export const register = (options) => request(
  'http://localhost:8080/user/register',
  options,
  undefined,
  false,
);
