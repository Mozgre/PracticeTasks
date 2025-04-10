import { convertHTML } from './task';

describe('Convert HTML entities', () => {
  test('replaces special characters', () => {
    expect(convertHTML('Dolce & Gabbana')).toBe('Dolce &amp; Gabbana');
  });

  test('handles multiple replacements', () => {
    expect(convertHTML('<>')).toBe('&lt;&gt;');
  });
});