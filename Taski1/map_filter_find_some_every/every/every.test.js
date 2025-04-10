import {myEvery} from './every'; 

describe('myEvery', () => {
  test('returns true if all elements pass the test', () => {
    const arr = [2, 4, 6, 8];
    expect(myEvery(arr, num => num % 2 === 0)).toBe(true);
  });

  test('returns false if any element fails', () => {
    const arr = [2, 4, 5, 8];
    expect(myEvery(arr, num => num % 2 === 0)).toBe(false);
  });
});