import binarySearch from './binarySearch.js';

test('list contains item', () => {
  const list1 = [1, 3, 5, 7, 9];
  expect(binarySearch(list1, 3)).toBe(1);

  const list2 = [1];
  expect(binarySearch(list2, 1)).toBe(0);
});

test('list does not contain item', () => {
  const list1 = [1, 3, 5, 7, 9];
  expect(binarySearch(list1, 8)).toBe(null);

  const list2 = [1];
  expect(binarySearch(list2, 3)).toBe(null);
});

test('empty list', () => {
  const list = [];
  expect(binarySearch(list, 8)).toBe(null);
});
