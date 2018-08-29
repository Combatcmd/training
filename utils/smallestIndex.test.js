import smallestIndex from './smallestIndex.js';

test('find index of smallest item in the list', () => {
  const list = [1, 4, 7, 3, 16, 8, -6];
  expect(smallestIndex(list)).toBe(6);
});
