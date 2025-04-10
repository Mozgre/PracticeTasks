import { sumPrimes } from './task';

describe('Sum of primes', () => {
  test('sums primes up to 10', () => {
    expect(sumPrimes(10)).toBe(17);
  });

  test('handles large input', () => {
    expect(sumPrimes(977)).toBe(73156);
  });
});