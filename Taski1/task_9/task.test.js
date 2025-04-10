import { chunkArray } from './task';

describe('Chunk array', () => {
  test('splits into chunks of 2', () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
});