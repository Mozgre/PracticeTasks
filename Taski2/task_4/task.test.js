import { whatIsInAName } from './task';

describe('Find matching objects', () => {
  const collection = [
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 }
  ];

  test('finds objects with matching properties', () => {
    expect(whatIsInAName(collection, { "apple": 1, "bat": 2 })).toEqual([
      { "apple": 1, "bat": 2 },
      { "apple": 1, "bat": 2, "cookie": 2 }
    ]);
  });
});