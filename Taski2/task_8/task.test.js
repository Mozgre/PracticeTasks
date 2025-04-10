import { uniteUnique } from './task';

describe('Unique values from multiple arrays', () => {
  test('merges and deduplicates', () => {
    expect(uniteUnique([1, 2], [3, 4], [1, 3])).toEqual([1, 2, 3, 4]);
  });
});