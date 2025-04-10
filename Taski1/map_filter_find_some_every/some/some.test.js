import {mySome} from './some';
describe('mySome', () => {
    test('returns true if any element passes', () => {
      const arr = [1, 3, 4, 5];
      expect(mySome(arr, num => num % 2 === 0)).toBe(true);
    });
  
    test('returns false if no elements pass', () => {
      const arr = [1, 3, 5];
      expect(mySome(arr, num => num % 2 === 0)).toBe(false);
    });
  });