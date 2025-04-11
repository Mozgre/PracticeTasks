import { dropElements } from './task';

describe('Drop elements until condition', () => {
  test('drops until n >= 3', () => {
    expect(dropElements([1, 2, 3, 4], n => n >= 3)).toEqual([3, 4]);
  });

  test('returns empty array if condition never met', () => {
    expect(dropElements([1, 2, 3], n => n > 5)).toEqual([]);
  });
});