import createMatrix from './createMatrix.js';

test('test creation of matrix', () => {
  expect(createMatrix(2, 3)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
});
