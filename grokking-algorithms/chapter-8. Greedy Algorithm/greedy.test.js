import greedy from './greedy.js';

test('test greedy algorithm', () => {
  let statesNeeded = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

  const stations = {
    one: new Set(['a', 'b', 'c']),
    two: new Set(['a', 'b', 'd']),
    three: new Set(['c', 'e', 'f', 'g']),
    four: new Set(['b', 'c']),
    five: new Set(['e', 'f']),
  };
  expect(greedy(statesNeeded, stations)).toEqual(new Set(['two', 'three']));
});
