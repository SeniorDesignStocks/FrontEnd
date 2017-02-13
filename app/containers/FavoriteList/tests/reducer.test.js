import expect from 'expect';
import favoriteListReducer from '../reducer';
import { fromJS } from 'immutable';

describe('favoriteListReducer', () => {
  it('returns the initial state', () => {
    expect(favoriteListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
