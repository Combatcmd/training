import dijkstra from './dijkstra.js';

test("test dijkstra's alg", () => {
  const g = {
    start: {
      a: 6,
      b: 2,
    },
    a: {
      finish: 1,
    },
    b: {
      a: 3,
      finish: 5,
    },
    finish: {},
  };
  const c = {
    a: 6,
    b: 2,
    finish: Infinity,
  };
  const p = {
    a: 'start',
    b: 'start',
    finish: null,
  };
  expect(dijkstra(g, c, p)).toBe(6);
});
