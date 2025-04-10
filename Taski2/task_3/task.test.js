import { destroyer } from './task';

describe('Remove specified values', () => {
  test('removes target values', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
  });

  test('works with strings', () => {
    expect(destroyer(['apple', 'banana', 'orange'], 'banana')).toEqual(['apple', 'orange']);
  });
});