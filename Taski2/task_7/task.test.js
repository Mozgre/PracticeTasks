import { fearNotLetter } from './task';

describe('Find missing letter', () => {
  test('detects missing "d"', () => {
    expect(fearNotLetter('abce')).toBe('d');
  });

  test('returns undefined if no missing', () => {
    expect(fearNotLetter('abcdef')).toBeUndefined();
  });
});