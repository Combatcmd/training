import { count, factorial, sum } from './recursion.js';

test('test recursive count', () => {
  const list = [11, 2, 3, 6, 7, 0, 7, 1];
  expect(count(list)).toBe(8);
});

test('test recursive factorial', () => {
  expect(factorial(5)).toBe(120);
});

test('test recursive sum', () => {
  const list = [11, 2, 3, 6, 7, 0, 7, 1];
  expect(sum(list)).toBe(37);
});
