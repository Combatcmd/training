import selectedSort from './selectionSort.js';

test('selected sort testing', () => {
  const list = [1, 4, 7, 2, 10, 20, -5];
  const sortedList = [-5, 1, 2, 4, 7, 10, 20];
  expect(selectedSort(list)).toEqual(sortedList);
});
