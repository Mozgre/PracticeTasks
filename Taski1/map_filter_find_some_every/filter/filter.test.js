import {myFilter}  from './filter';
describe('myFilter', () => {
    test('filters even numbers', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myFilter(arr, num => num % 2 === 0)).toEqual([2, 4]);
    });
  
    test('returns empty array if no matches', () => {
      const arr = [1, 3, 5];
      expect(myFilter(arr, num => num % 2 === 0)).toEqual([]);
    });
  });