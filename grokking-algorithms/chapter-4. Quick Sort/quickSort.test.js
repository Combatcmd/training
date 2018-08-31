import quickSort from './quickSort.js';

test('quick sort testing', () => {
  const list = [1, 4, 7, 2, 10, 20, -5];
  const sortedList = [-5, 1, 2, 4, 7, 10, 20];
  expect(quickSort(list)).toEqual(sortedList);
});
