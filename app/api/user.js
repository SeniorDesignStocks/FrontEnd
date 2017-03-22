import request from 'utils/request';
import { route } from './index';

export const login = (options) => request(
  `${route}/user/login`,
  options,
  undefined,
  false,
);

export const logout = (options) => request(
  `${route}/user/logout`,
  options,
  undefined,
  false,
);

export const register = (options) => request(
  `${route}/user/register`,
  options,
  undefined,
  false,
);
