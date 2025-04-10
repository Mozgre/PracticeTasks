import { longestWordLength } from './task';

describe('Longest word length', () => {
  test('works with spaces', () => {
    expect(longestWordLength('The quick brown fox')).toBe(5);
  });

  test('works with punctuation', () => {
    expect(longestWordLength('Hello, world!')).toBe(5);
  });
});