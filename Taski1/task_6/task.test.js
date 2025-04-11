import { insertArrayAt } from './task';

describe('Insert array at index', () => {
  test('inserts correctly', () => {
    expect(insertArrayAt([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
  });
});