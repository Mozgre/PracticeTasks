import { titleCase } from './task';

describe('Title Case', () => {
  test('converts to title case', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });

  test('handles uppercase input', () => {
    expect(titleCase('JAVASCRIPT IS AWESOME')).toBe('Javascript Is Awesome');
  });
});