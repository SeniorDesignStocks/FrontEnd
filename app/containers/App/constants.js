/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

const route = 'StockApp/App/';
export const DISPLAY_ERROR = `${route}DISPLAY_ERROR`;
export const REMOVE_ERROR = `${route}REMOVE_ERROR`;
export const SIGN_IN = `${route}SIGN_IN`;
export const SIGN_OUT = `${route}SIGN_OUT`;

export const UNFAVORITE = `${route}UNFAVORITE`;
export const UNFAVORITE_SUCCESS = `${route}UNFAVORITE_SUCCESS`;
export const UNFAVORITE_FAILED = `${route}UNFAVORITE_FAILED`;

export const ADDFAVORITE = `${route}ADDFAVORITE`;
export const ADDFAVORITE_SUCCESS = `${route}ADDFAVORITE_SUCCESS`;
export const ADDFAVORITE_FAILED = `${route}ADDFAVORITE_FAILED`;
