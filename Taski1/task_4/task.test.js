import { truncateString } from './task';

describe('Truncate string', () => {
  test('adds "..." if longer than limit', () => {
    expect(truncateString('Hello world', 5)).toBe('Hello...');
  });

  test('returns original if shorter', () => {
    expect(truncateString('Hi', 10)).toBe('Hi');
  });
});