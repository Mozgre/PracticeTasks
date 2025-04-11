import { steamrollArray } from './task';

describe('Flatten nested arrays', () => {
  test('flattens complex nesting', () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
  });

  test('handles empty arrays', () => {
    expect(steamrollArray([[], [1]])).toEqual([1]);
  });
});