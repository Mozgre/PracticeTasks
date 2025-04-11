import {myMap} from './map'; 
describe('myMap', () => {
    test('doubles each number', () => {
      const arr = [1, 2, 3];
      expect(myMap(arr, num => num * 2)).toEqual([2, 4, 6]);
    });
  
    test('handles empty array', () => {
      expect(myMap([], num => num * 2)).toEqual([]);
    });
  });