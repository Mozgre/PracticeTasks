import { removeFalsy } from './task';

describe('Remove falsy values', () => {
  test('filters falsy values', () => {
    expect(removeFalsy([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });
});