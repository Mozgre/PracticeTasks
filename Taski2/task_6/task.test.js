import { myReplace } from './task';

describe('Search and replace', () => {
  test('preserves case', () => {
    expect(myReplace('He is Sleeping', 'Sleeping', 'sitting')).toBe('He is Sitting');
  });

  test('handles lowercase', () => {
    expect(myReplace('let us go', 'go', 'run')).toBe('let us run');
  });
});