import dynamic from './dynamic.js';

test('test dynamic programming algorithm', () => {
  expect(dynamic('abcde', 'cdefg')).toBe('cde');
});
