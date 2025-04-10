import { containsAllLetters } from './task';

describe('Contains all letters', () => {
  test('returns true for matching letters', () => {
    expect(containsAllLetters(['hello', 'HELLO'])).toBe(true);
  });

  test('returns false for missing letters', () => {
    expect(containsAllLetters(['hello', 'hey'])).toBe(false);
  });
});