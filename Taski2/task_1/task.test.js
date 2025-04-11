import { sumAll } from './task';

describe('Sum range between numbers', () => {
  test('sums [4, 1] correctly', () => {
    expect(sumAll([4, 1])).toBe(10);
  });

  test('works with large range', () => {
    expect(sumAll([1, 100])).toBe(5050);
  });
});