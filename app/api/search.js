import request from 'utils/request';
import { route } from './index';

export const termSearch = ({ term }) => request(
  `${route}/search/${term}`,
  {},
  undefined,
  true,
);
