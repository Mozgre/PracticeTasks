import { diffArrays } from './task';

describe('Symmetric difference', () => {
  test('finds unique elements', () => {
    expect(diffArrays([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
  });

  test('works with empty arrays', () => {
    expect(diffArrays([], [1, 2])).toEqual([1, 2]);
  });
});