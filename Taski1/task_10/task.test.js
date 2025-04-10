import { fillArrayFromN }from './task';

describe('Fill array from N to 1', () => {
  test('fills array recursively', () => {
    expect(fillArrayFromN([], 5)).toEqual([5, 4, 3, 2, 1]);
  });
});