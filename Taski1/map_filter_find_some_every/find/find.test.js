import {myFind} from './find';
describe('myFind', () => {
    test('finds first even number', () => {
      const arr = [1, 3, 4, 5, 6];
      expect(myFind(arr, num => num % 2 === 0)).toBe(4);
    });
  
    test('returns undefined if not found', () => {
      const arr = [1, 3, 5];
      expect(myFind(arr, num => num % 2 === 0)).toBeUndefined();
    });
  });