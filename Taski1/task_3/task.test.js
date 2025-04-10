import { largestNumbersFromArrays } from './task';

describe('Largest numbers from subarrays', () => {
  test('finds max values', () => {
    expect(largestNumbersFromArrays([[1, 2, 3], [4, 5], [6, 7, 8, 9]])).toEqual([3, 5, 9]);
  });
});