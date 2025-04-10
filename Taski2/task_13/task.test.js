import { addTogether } from './task';

describe('Curried addition', () => {
  test('sums two numbers', () => {
    expect(addTogether(2, 3)).toBe(5);
  });

  test('returns function with one arg', () => {
    expect(addTogether(2)(3)).toBe(5);
  });
});