import { factorial } from './task.js';

describe('Factorial function', () => {
  test('calculates factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('returns 1 for 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('returns -1 for negative numbers', () => {
    expect(factorial(-1)).toBe(-1);
  });
});