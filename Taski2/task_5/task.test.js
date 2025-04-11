import { spinalCase } from './task';

describe('Convert to spinal-case', () => {
  test('handles spaces', () => {
    expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap');
  });

  test('handles camelCase', () => {
    expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap');
  });
});